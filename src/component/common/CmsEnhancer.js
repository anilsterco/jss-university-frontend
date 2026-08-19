"use client";

import { InitIcgeTestimonialSwiper } from "@/lib/cms/initIcgeTestimonialSwiper";
import { InitGallerySwiper } from "@/lib/cms/initGallerySwiper";
import { InitLightbox } from "@/lib/cms/initLightbox";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function waitForLayout() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
}

export default function CmsEnhancer({ containerId }) {
    const pathname = usePathname();

    useEffect(() => {
        let cancelled = false;
        const cleanupFns = [];

        async function init() {
            await waitForLayout();
            if (cancelled) return;

            const root = document.getElementById(containerId);
            if (!root) return;

            if (root.querySelector(".testimonial-slider2")) {
                const cleanup = await InitIcgeTestimonialSwiper(root);
                if (cancelled) {
                    cleanup();
                    return;
                }
                cleanupFns.push(cleanup);
            }

            if (root.querySelector(".gallery-slider")) {
                const cleanup = await InitGallerySwiper(root);
                if (cancelled) {
                    cleanup();
                    return;
                }
                cleanupFns.push(cleanup);
            }

            // Lightbox is generic — always attach if any trigger exists
            if (root.querySelector(".js-lightbox")) {
                const cleanup = InitLightbox(root);
                if (cancelled) {
                    cleanup();
                    return;
                }
                cleanupFns.push(cleanup);
            }
        }

        init();

        return () => {
            cancelled = true;
            cleanupFns.forEach((cleanup) => cleanup());
        };
    }, [containerId, pathname]);

    return null;
}