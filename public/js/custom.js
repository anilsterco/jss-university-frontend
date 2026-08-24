(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function onLoad(fn) {
    if (document.readyState === "complete") {
      fn();
    } else {
      window.addEventListener("load", fn);
    }
  }

  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsa(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function isVisible(el) {
    return !!(el && el.offsetWidth > 0 && el.offsetHeight > 0);
  }

  function nextMatching(el, selector) {
    let node = el ? el.nextElementSibling : null;
    while (node) {
      if (node.matches(selector)) return node;
      node = node.nextElementSibling;
    }
    return null;
  }

  function slideDown(el, duration) {
    if (!el) return;
    duration = duration || 300;
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") display = "block";
    el.style.display = display;
    const height = el.scrollHeight;
    el.style.overflow = "hidden";
    el.style.height = "0";
    el.style.transition = "height " + duration + "ms ease";
    el.offsetHeight;
    el.style.height = height + "px";
    window.setTimeout(function () {
      el.style.height = "";
      el.style.overflow = "";
      el.style.transition = "";
    }, duration);
  }

  function slideUp(el, duration) {
    if (!el) return;
    duration = duration || 300;
    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
    el.style.transition = "height " + duration + "ms ease";
    el.offsetHeight;
    el.style.height = "0";
    window.setTimeout(function () {
      el.style.display = "none";
      el.style.height = "";
      el.style.overflow = "";
      el.style.transition = "";
    }, duration);
  }

  function adjustBodyPadding() {
    const header = qs(".main_header");
    const homeBody = qs(".home_main");
    const schoolBody = qs(".school_main");

    if (!header) return;

    window.setTimeout(function () {
      const headerHeight = header.offsetHeight;
      if (homeBody) {
        homeBody.style.paddingTop = headerHeight + "px";
      }
      if (schoolBody && window.innerWidth <= 991) {
        schoolBody.style.paddingTop = headerHeight + "px";
      } else if (schoolBody) {
        schoolBody.style.paddingTop = "";
      }
    }, 100);
  }

  onLoad(adjustBodyPadding);
  window.addEventListener("resize", adjustBodyPadding);

  function scrollToHash(hash) {
    if (!hash || hash === "#") return;
    const target = qs(hash);
    if (!target) return;
    window.setTimeout(function () {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: top, behavior: "smooth" });
    }, 300);
  }

  document.addEventListener("click", function (e) {
    const hashLink = e.target.closest('a[href*="#"]');
    if (hashLink && hashLink.getAttribute("href") !== "#") {
      if (hashLink.hash) scrollToHash(hashLink.hash);
    }
  });

  onLoad(function () {
    if (location.hash) scrollToHash(location.hash);
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".open_search")) {
      qs(".search_form")?.classList.add("active");
    }
    if (e.target.closest(".search-close")) {
      qs(".search_form")?.classList.remove("active");
    }
  });

  function toggleStickyHeader() {
    const sticky = qs(".main_header");
    if (!sticky) return;
    if (window.scrollY >= 100) {
      sticky.classList.add("sticky");
    } else {
      sticky.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", toggleStickyHeader, { passive: true });
  onReady(toggleStickyHeader);

  onReady(function () {
    qsa(".accordion-button.active").forEach(function (btn) {
      const panel = nextMatching(btn, ".accordion-collapse");
      if (panel) panel.style.display = "block";
    });
  });

  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".accordion-button");
    if (!btn) return;

    const same = btn.classList.contains("active");
    const accordion = btn.closest(".accordion");
    if (!accordion) return;

    accordion.querySelectorAll(".accordion-item").forEach(function (item) {
      const itemBtn = item.querySelector(".accordion-button");
      const panel = itemBtn ? nextMatching(itemBtn, ".accordion-collapse") : null;
      if (itemBtn && itemBtn.classList.contains("active") && panel) {
        slideUp(panel);
      }
      itemBtn?.classList.remove("active");
    });

    const panel = nextMatching(btn, ".accordion-collapse");
    if (!same) {
      e.preventDefault();
      btn.classList.add("active");
      slideDown(panel);
    } else {
      slideUp(panel);
      btn.classList.remove("active");
    }
  });

  function initializeFirstDropmenu() {
    const firstDropmenu = qs(".dropmenu");
    if (!firstDropmenu) return;
    firstDropmenu.classList.add("active");
    const firstTarget = firstDropmenu.getAttribute("data-target");
    if (firstTarget) qs(firstTarget)?.classList.add("show");
  }

  onReady(initializeFirstDropmenu);

  document.addEventListener("mouseover", function (e) {
    const dropmenu = e.target.closest(".dropmenu");
    if (!dropmenu || dropmenu.classList.contains("active")) return;

    qsa(".dropmenu").forEach(function (sibling) {
      if (sibling === dropmenu) return;
      sibling.classList.remove("active");
      const siblingTarget = sibling.getAttribute("data-target");
      if (siblingTarget) qs(siblingTarget)?.classList.remove("show");
    });

    dropmenu.classList.add("active");
    const targetSel = dropmenu.getAttribute("data-target");
    if (!targetSel) return;
    const target = qs(targetSel);
    if (!target) return;
    target.classList.add("show");
    if (target.parentElement) {
      Array.from(target.parentElement.children).forEach(function (sib) {
        if (sib !== target) sib.classList.remove("show");
      });
    }
    if (!qs(".drop_menu1")?.classList.contains("show")) {
      qsa(".hamb_dropmenu .hamb_menu_item").forEach(function (item) {
        item.classList.remove("show");
      });
    }
  });

  document.addEventListener("mouseover", function (e) {
    const li = e.target.closest(".hamb_panel > ul > li");
    if (!li) return;
    qsa(".hamb_panel > ul > li").forEach(function (item) {
      item.classList.remove("active");
    });
    qs(".hamb_dropmenu")?.classList.remove("show");
    li.classList.add("active");
    const target = li.getAttribute("data-target");
    if (target) qs(target)?.classList.add("show");
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".hamb_bar") || e.target.closest(".hamb_open")) {
      qs(".hamburger_menu")?.classList.add("active");
    }
    if (e.target.closest(".ham_close")) {
      qs(".hamburger_menu")?.classList.remove("active");
      qsa(".dropmenu").forEach(function (el) {
        el.classList.remove("active");
      });
      qs(".hamb_dropmenu")?.classList.remove("show");
      qsa(".hamb_menu_item").forEach(function (el) {
        el.classList.remove("show");
      });
      initializeFirstDropmenu();
    }
  });

  document.addEventListener("click", function (e) {
    const tab = e.target.closest(".tab");
    if (!tab || tab.classList.contains("disabled")) return;
    qsa(".tab").forEach(function (t) {
      t.classList.remove("active");
    });
    qsa(".tab-pane").forEach(function (pane) {
      pane.classList.remove("fade", "active");
    });
    tab.classList.add("active");
    const targetPane = qs(tab.getAttribute("data-target"));
    if (targetPane) targetPane.classList.add("fade", "active");
  });

  onReady(function () {
    const boxes = qsa(".cus-program-box");
    const loadMoreBtn = document.getElementById("loadMore");
    if (!loadMoreBtn || !boxes.length) return;

    let currentItems = 9;
    for (let i = 0; i < currentItems; i++) {
      if (boxes[i]) boxes[i].style.display = "block";
    }

    loadMoreBtn.addEventListener("click", function () {
      for (let i = currentItems; i < currentItems + 3; i++) {
        if (boxes[i]) boxes[i].style.display = "block";
      }
      currentItems += 3;
      if (currentItems >= boxes.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  });

  document.addEventListener("click", function (e) {
    const tabbed = e.target.closest(".tabbed-content");
    if (!tabbed) return;

    const tabs = qs(".tabs", tabbed);
    const tabsVisible = isVisible(tabs);

    const tabLink = e.target.closest(".tabs a");
    if (tabLink && tabsVisible) {
      e.preventDefault();
      const targetSel = tabLink.getAttribute("href");
      qsa("a", tabs).forEach(function (a) {
        a.classList.remove("active");
      });
      qsa(".item", tabbed).forEach(function (item) {
        item.classList.remove("active");
      });
      tabLink.classList.add("active");
      if (targetSel) qs(targetSel)?.classList.add("active");
      return;
    }

    const item = e.target.closest(".item");
    if (item && !tabsVisible) {
      const currId = item.getAttribute("id");
      qsa(".tabs a", tabbed).forEach(function (a) {
        a.classList.remove("active");
      });
      qsa(".item", tabbed).forEach(function (el) {
        el.classList.remove("active");
      });
      item.classList.add("active");
      if (currId) {
        qsa('.tabs a[href$="#' + currId + '"]', tabbed).forEach(function (a) {
          a.classList.add("active");
        });
      }
    }
  });

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("hide");
    modal.classList.remove("show");
  }

  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("[data-target]");
    if (trigger) {
      const raw = trigger.getAttribute("data-target") || "";
      if (raw.startsWith("#")) openModal(raw.substring(1));
    }
    const closeBtn = e.target.closest(".closeModal");
    if (closeBtn) {
      const modal = closeBtn.closest(".modal");
      if (modal) closeModal(modal.id);
    }
    qsa(".modal").forEach(function (modal) {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  function wipeOn() {
    if (window.innerWidth < 992) return;

    qsa(".image").forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight - 200) {
        el.classList.add("reveal-image");
      }
    });
    qsa(".image2").forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight - 200) {
        el.classList.add("reveal-image2");
      }
    });
    qsa(".image3").forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight - 200) {
        el.classList.add("reveal-image3");
      }
    });
  }

  onLoad(wipeOn);
  window.addEventListener("scroll", wipeOn, { passive: true });
  window.addEventListener("resize", wipeOn);

  function adjustMaxContent() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 4000) windowWidth = 4000;

    qsa(
      ".max-content-xxl, .max-content-xl, .max-content-lg, .max-content-md, .max-content-sm, .max-content",
    ).forEach(function (el) {
      const container = el.closest(".container");
      if (!container) return;

      const containerWidth = container.clientWidth;
      const maxContentWidth =
        windowWidth - (windowWidth - containerWidth) / 2 + 16;

      if (windowWidth >= 1920) {
        el.style.maxWidth = maxContentWidth + "px";
        if (el.classList.contains("max-content-lg")) {
          if (windowWidth >= 2540) {
            el.style.maxWidth = "2180px";
          } else if (windowWidth >= 2200) {
            el.style.maxWidth = "2018px";
          } else {
            el.style.maxWidth = "1700px";
          }
        }
      } else if (windowWidth >= 1400) {
        el.style.maxWidth = maxContentWidth + "px";
      } else if (windowWidth >= 1200) {
        el.style.maxWidth = el.classList.contains("max-content-xxl")
          ? ""
          : maxContentWidth + "px";
      } else if (windowWidth >= 992) {
        el.style.maxWidth =
          !el.classList.contains("max-content-xxl") &&
          !el.classList.contains("max-content-xl")
            ? maxContentWidth + "px"
            : "";
      } else if (windowWidth >= 768) {
        el.style.maxWidth =
          !el.classList.contains("max-content-xxl") &&
          !el.classList.contains("max-content-xl") &&
          !el.classList.contains("max-content-lg")
            ? maxContentWidth + "px"
            : "";
      } else if (windowWidth >= 575) {
        el.style.maxWidth =
          el.classList.contains("max-content-sm") ||
          el.classList.contains("max-content")
            ? maxContentWidth + "px"
            : "";
      } else {
        el.style.maxWidth = "";
        el.style.width = el.classList.contains("max-content")
          ? maxContentWidth + "px"
          : "";
      }
    });
  }

  function alignEdgeElements() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768 || windowWidth > 4000) return;

    const fullSection = qs(".full_touch");
    const leftElement = qs(".left_touch");
    const rightElement = qs(".right_touch");
    if (!fullSection) return;

    const sectionRect = fullSection.getBoundingClientRect();
    if (sectionRect.width >= windowWidth) {
      if (leftElement) leftElement.style.marginLeft = "0px";
      if (rightElement) rightElement.style.marginRight = "0px";
      return;
    }

    if (leftElement) {
      leftElement.style.marginLeft =
        -leftElement.getBoundingClientRect().left + "px";
    }
    if (rightElement) {
      const rightGap = windowWidth - rightElement.getBoundingClientRect().right;
      rightElement.style.marginRight = -rightGap + "px";
    }
  }

  function runAll() {
    adjustMaxContent();
    alignEdgeElements();
  }

  onReady(runAll);
  onLoad(runAll);

  let resizeRAF;
  window.addEventListener("resize", function () {
    cancelAnimationFrame(resizeRAF);
    resizeRAF = requestAnimationFrame(runAll);
  });

  if (document.body) {
    const observer = new MutationObserver(runAll);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function setResponsiveMargin() {
    const minWidth = 1200;
    const maxWidth = 1500;
    const maxMargin = -120;
    const startMargin = -20;
    const vw = window.innerWidth;

    if (vw >= minWidth && vw < maxWidth) {
      const marginValue =
        startMargin +
        ((vw - minWidth) / (maxWidth - minWidth)) * (maxMargin - startMargin);
      document.documentElement.style.setProperty(
        "--leftminus120",
        marginValue + "px",
      );
      document.documentElement.style.setProperty(
        "--rightminus120",
        marginValue + "px",
      );
    } else if (vw >= maxWidth) {
      document.documentElement.style.setProperty("--leftminus120", maxMargin + "px");
      document.documentElement.style.setProperty("--rightminus120", maxMargin + "px");
    } else {
      document.documentElement.style.removeProperty("--leftminus120");
      document.documentElement.style.removeProperty("--rightminus120");
    }
  }

  setResponsiveMargin();
  window.addEventListener("resize", setResponsiveMargin);

  function togglePanel(panelToShow, activeElement) {
    const panel = qs(panelToShow);
    const isActive = panel?.classList.contains("show");
    qsa(
      ".mobile_panel01, .mobile_panel02, .mobile_panel03, .mobile_panel04",
    ).forEach(function (el) {
      el.classList.remove("show");
    });
    if (!isActive) panel?.classList.add("show");
    qsa(".mob_tab01, .mob_tab02, .mob_tab03, .mob_tab04").forEach(function (el) {
      el.classList.remove("active");
    });
    if (!isActive) activeElement.classList.add("active");
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest(".mob_tab01")) togglePanel(".mobile_panel01", e.target.closest(".mob_tab01"));
    if (e.target.closest(".mob_tab02")) togglePanel(".mobile_panel02", e.target.closest(".mob_tab02"));
    if (e.target.closest(".mob_tab03")) togglePanel(".mobile_panel03", e.target.closest(".mob_tab03"));
    if (e.target.closest(".mob_tab04")) togglePanel(".mobile_panel04", e.target.closest(".mob_tab04"));
  });

  document.addEventListener("mouseover", function (e) {
    const navItem = e.target.closest(".desktop-nav > ul > li.nav-item");
    if (navItem) {
      qs(".mega-dropdown", navItem)?.classList.add("active-hover");
      document.body.classList.add("active_head");
    }
    const navList = e.target.closest(".nav-container .nav-list");
    if (navList) {
      navList.classList.add("active-hover");
      document.body.classList.add("active_head");
    }
  });

  document.addEventListener("mouseout", function (e) {
    const navItem = e.target.closest(".desktop-nav > ul > li.nav-item");
    if (navItem && !navItem.contains(e.relatedTarget)) {
      qs(".mega-dropdown", navItem)?.classList.remove("active-hover");
      document.body.classList.remove("active_head");
    }
    const navList = e.target.closest(".nav-container .nav-list");
    if (navList && !navList.contains(e.relatedTarget)) {
      navList.classList.remove("active-hover");
      document.body.classList.remove("active_head");
    }
  });
})();

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    "(min-width: 991px)": function () {
      const panels = gsap.utils.toArray(".facilities-list-box");
      const lastIndex = panels.length - 1;
      const imgBox = document.querySelector(".facilities-img");
      const topImageWrapper = document.querySelector(".facilities-image-wrapper");

      panels.forEach(function (panel, index) {
        if (index !== lastIndex) {
          gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top 55%",
              end: "+=40%",
              scrub: 1.2,
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
              pinType: "fixed",
              onEnter: function () {
                gsap.to(panel, {
                  duration: 0.3,
                  top: "55%",
                  ease: "power2.out",
                });

                if (index > 0 && index + 1 !== panels.length) {
                  gsap.to(panels[index - 1], {
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                    duration: 0.3,
                    ease: "power1.out",
                  });
                }
              },
              onLeaveBack: function () {
                if (index > 0 && index + 1 !== panels.length) {
                  gsap.to(panels[index - 1], {
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "auto",
                    duration: 0.3,
                    ease: "power1.out",
                  });
                }
              },
            },
          });
        }
      });

      ScrollTrigger.create({
        trigger: ".facilities-box",
        start: "top top",
        end: "bottom bottom",
        pin: topImageWrapper,
        pinSpacing: false,
        anticipatePin: 1,
      });

      ScrollTrigger.create({
        start: 0,
        end: 1350,
        onEnter: function () {
          imgBox?.classList.add("sticky-active");
        },
        onLeave: function () {
          imgBox?.classList.remove("sticky-active");
        },
        onEnterBack: function () {
          imgBox?.classList.add("sticky-active");
        },
        onLeaveBack: function () {
          imgBox?.classList.remove("sticky-active");
        },
      });
    },
  });
}
