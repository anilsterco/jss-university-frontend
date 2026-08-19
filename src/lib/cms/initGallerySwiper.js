// lib/cms/initGallerySwiper.js
const SELECTOR = ".gallery-slider";

export async function InitGallerySwiper(root) {
    const sliders = root.querySelectorAll(SELECTOR);

    if (!sliders.length) {
        return () => {};
    }

    const [{ default: SwiperCore }, { Navigation }] = await Promise.all([
        import("swiper"),
        import("swiper/modules"),
    ]);

    await import("swiper/css");

    const instances = [];
    const initializedEls = [];

    sliders.forEach((slider) => {
        if (slider.dataset.swiperInit === "true") {
            return;
        }

        const wrapper = slider.querySelector(".swiper-wrapper");

        if (!wrapper) {
            console.warn("[Gallery Swiper] .swiper-wrapper not found");
            return;
        }

        const slides = wrapper.querySelectorAll(".swiper-slide");

        if (!slides.length) {
            console.warn("[Gallery Swiper] No swiper slides found");
            return;
        }

        /*
         * IMPORTANT:
         * nav buttons live in a sibling ".gallery-navigation"
         * block, not inside .gallery-slider itself, so we look
         * up to the parent to find them. Scoped to this slider's
         * own parent — never document-wide.
         */
        const container = slider.parentElement || slider;

        const nextEl = container.querySelector(".gallery-next");
        const prevEl = container.querySelector(".gallery-prev");

        slider.dataset.swiperInit = "true";
        initializedEls.push(slider);

        const swiper = new SwiperCore(slider, {
            modules: [Navigation],

            slidesPerView: 1,
            spaceBetween: 16,
            speed: 500,
            loop: slides.length > 3,

            breakpoints: {
                576: { slidesPerView: 1, spaceBetween: 16 },
                992: { slidesPerView: 1, spaceBetween: 20 },
                1200: { slidesPerView: 1, spaceBetween: 24 },
            },

            navigation:
                nextEl && prevEl
                    ? {
                          nextEl,
                          prevEl,
                      }
                    : undefined,

            observer: true,
            observeParents: true,
        });

        instances.push(swiper);
    });

    return () => {
        instances.forEach((swiper) => {
            if (!swiper.destroyed) {
                swiper.destroy(true, true);
            }
        });

        initializedEls.forEach((el) => {
            delete el.dataset.swiperInit;
        });
    };
}