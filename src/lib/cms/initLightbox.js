// lib/cms/initLightbox.js
const TRIGGER_SELECTOR = ".js-lightbox";
let stylesInjected = false;

function injectStyles() {
    if (stylesInjected || document.getElementById("js-lightbox-styles")) {
        return;
    }
    const style = document.createElement("style");
    style.id = "js-lightbox-styles";
    style.textContent = `
        .js-lightbox-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.25s ease;
            padding: 24px;
        }
        .js-lightbox-overlay.is-open {
            opacity: 1;
            visibility: visible;
        }
        .js-lightbox-overlay img {
            max-width: 90vw;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 4px;
        }
        .js-lightbox-close {
            position: absolute;
            top: 20px;
            right: 24px;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 32px;
            line-height: 1;
            cursor: pointer;
            padding: 8px;
        }
        .js-lightbox-overlay img {
            cursor: default;
        }
    `;
    document.head.appendChild(style);
    stylesInjected = true;
}

function createOverlay() {
    let overlay = document.getElementById("js-lightbox-overlay");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "js-lightbox-overlay";
    overlay.className = "js-lightbox-overlay";
    overlay.innerHTML = `
        <button type="button" class="js-lightbox-close" aria-label="Close">&times;</button>
        <img src="" alt="" />
    `;
    document.body.appendChild(overlay);
    return overlay;
}

export function InitLightbox(root) {
    injectStyles();
    const overlay = createOverlay();
    const overlayImg = overlay.querySelector("img");
    const closeBtn = overlay.querySelector(".js-lightbox-close");

    function open(src, alt) {
        overlayImg.src = src;
        overlayImg.alt = alt || "";
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function close() {
        overlay.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    function onRootClick(e) {
        const trigger = e.target.closest(TRIGGER_SELECTOR);
        if (!trigger || !root.contains(trigger)) return;

        const fullSrc =
            trigger.dataset.full || trigger.currentSrc || trigger.src;

        open(fullSrc, trigger.alt);
    }

    function onOverlayClick(e) {
        if (e.target === overlay) close();
    }

    function onKeydown(e) {
        if (e.key === "Escape") close();
    }

    root.addEventListener("click", onRootClick);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", onOverlayClick);
    document.addEventListener("keydown", onKeydown);

    return () => {
        root.removeEventListener("click", onRootClick);
        closeBtn.removeEventListener("click", close);
        overlay.removeEventListener("click", onOverlayClick);
        document.removeEventListener("keydown", onKeydown);
    };
}