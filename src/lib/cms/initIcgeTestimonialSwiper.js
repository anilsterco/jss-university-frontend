import { Autoplay } from "swiper/modules";

const SELECTOR = ".testimonial-slider2";

export async function InitIcgeTestimonialSwiper(
    root
) {
    const sliders =
        root.querySelectorAll(SELECTOR);

    if (!sliders.length) {
        return () => {};
    }

    const [{ default: SwiperCore }, { Navigation, EffectFade }] =
        await Promise.all([
            import("swiper"),
            import("swiper/modules"),
        ]);

    await import("swiper/css");
    await import("swiper/css/effect-fade");

    const instances = [];
    const initializedEls = [];

    sliders.forEach((slider) => {
        if (slider.dataset.swiperInit === "true") {
            return;
        }

        const wrapper =
            slider.querySelector(
                ".swiper-wrapper"
            );

        if (!wrapper) {
            console.warn(
                "[ICGE Swiper] .swiper-wrapper not found"
            );
            return;
        }

        const slides =
            wrapper.querySelectorAll(
                ".swiper-slide"
            );

        if (!slides.length) {
            console.warn(
                "[ICGE Swiper] No swiper slides found"
            );
            return;
        }
        const nextEl =
            slider.querySelector(
                ".testimonial-next"
            );

        const prevEl =
            slider.querySelector(
                ".testimonial-prev"
            );

        slider.dataset.swiperInit = "true";
        initializedEls.push(slider);

        const swiper = new SwiperCore(slider, {
            modules: [Navigation, EffectFade, Autoplay],
            effect: "fade",
            fadeEffect: { crossFade: true },
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 600,
            navigation: nextEl && prevEl ? { nextEl, prevEl } : undefined,
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
