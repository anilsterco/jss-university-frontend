


// UIAM - 02031998

(function ($) {
  "use strict";
    adjustMaxContent();
  AOS.init();


// Passenger Count JS End

function adjustBodyPadding() {
    const header = document.querySelector('.main_header');
    const homeBody = document.querySelector('.home_main');
    const schoolBody = document.querySelector('.school_main');

    if (header) {
        setTimeout(function () {
            const headerHeight = header.offsetHeight;
            if (homeBody) {
                homeBody.style.paddingTop = headerHeight + 'px';
            }
            if (schoolBody && window.innerWidth <= 991) {
                schoolBody.style.paddingTop = headerHeight + 'px';
            } else if (schoolBody) {
                schoolBody.style.paddingTop = '';
            }
        }, 100);
    }
}

window.addEventListener('load', adjustBodyPadding);
window.addEventListener('resize', adjustBodyPadding);




// Custom Cursor JS End //
jQuery(function ($) {
  function scrollToHash(hash) {
    var target = $(hash);
    if (target.length) {
      setTimeout(function () {
        $("html, body").animate(
          { scrollTop: target.offset().top - 100 },
          500, // duration of scroll (adjust as needed)
          "linear"
        );
      }, 300); // delay before starting scroll
    }
  }

  $('a[href*="#"]:not([href="#"])').click(function (e) {
    e.preventDefault(); // prevent default anchor behavior
    scrollToHash(this.hash);
  });

  $(window).on("load", function () {
    if (location.hash) {
      scrollToHash(location.hash);
    }
  });
});

  // Mobile Menu Padding Adjustment End
  $(document).ready(function () {
    $('.open_search').on('click', function () {
      $('.search_form').addClass('active');
    });

    $('.search-close').on('click', function () {
      $('.search_form').removeClass('active');
    });
  });

  // Header Sticky Start

function toggleStickyHeader() {
  var sticky = $('.main_header');
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= 100) {
    sticky.addClass('sticky');
  } else {
    sticky.removeClass('sticky');
  }
}

// Run on scroll
$(window).on('scroll', toggleStickyHeader);

// Run once on page load
$(document).ready(toggleStickyHeader);


// Header Sticky End

$(document).ready(function () {
  // Show the accordion panels that are marked as active in HTML
  $(".accordion-button.active").each(function () {
    $(this).next(".accordion-collapse").show();
  });

  // Click event for accordion toggle
  $(".accordion-button").click(function (e) {
    var $this = $(this);
    var same = $this.hasClass("active");
    var $accordion = $this.closest(".accordion");
    var $siblings = $accordion.find(".accordion-item");

    // Close all other panels
    $siblings.find(".accordion-button.active + .accordion-collapse").slideUp();
    $siblings.find(".accordion-button").removeClass("active");

    // Toggle clicked one
    if (!same) {
      e.preventDefault();
      $this.addClass("active");
      $this.next(".accordion-collapse").slideDown();
    } else {
      // If the same one is clicked again, close it
      $this.next(".accordion-collapse").slideUp();
      $this.removeClass("active");
    }
  });
});



$(".hamb_bar").click(function () {
    $(".hamburger_menu").addClass("active");
  });

  $(".ham_close").click(function () {
    $(".hamburger_menu").removeClass("active");
  });
 $(document).ready(function () {
      function initializeFirstDropmenu() {
          let firstDropmenu = $(".dropmenu:first");
          firstDropmenu.addClass("active");
          let firstTarget = firstDropmenu.data("target");
          if (firstTarget) {
              $(firstTarget).addClass("show");
          }
      }
      initializeFirstDropmenu();

      $(".dropmenu").hover(function () {
          if ($(this).hasClass("active")) return;
          $(this).siblings(".dropmenu").removeClass("active").each(function () {
              let siblingTarget = $(this).data("target");
              if (siblingTarget) {
                  $(siblingTarget).removeClass("show");
              }
          });
          $(this).addClass("active");
          let o = $(this).data("target");
          if (o) {
              $(o).addClass("show");
              $(o).siblings().removeClass("show");
              if (!$(".drop_menu1").hasClass("show")) {
                  $(".hamb_dropmenu").find(".hamb_menu_item").removeClass("show");
              }
          }
      });

      // Close button click event
      $(".ham_close").click(function () {
          $(".dropmenu").removeClass("active");
          $(".hamb_dropmenu").removeClass("show");

          $(".hamb_menu_item").removeClass("show");
          initializeFirstDropmenu();
      });

      // Hover event for <li> elements in the .hamb_panel
      $(".hamb_panel>ul>li").hover(function () {
          $(".hamb_panel>ul>li").removeClass("active");
          $(".hamb_dropmenu").removeClass("show");

          // Add active class to hovered <li>
          $(this).addClass("active");
          let target = $(this).data("target");
          if (target) {
              $(target).addClass("show");
          }
      });
  });

  // Menu Dropdown End

  // Custom Tabs Start
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        if (tab.classList.contains('disabled')) {
          return;
        }
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('fade', 'active'));
        tab.classList.add('active');
        const targetPane = document.querySelector(tab.getAttribute('data-target'));
        if (targetPane) {
          targetPane.classList.add('fade', 'active');
        }
      });
    });
  });
  // Custom Tabs End

  // Hamburger Menu Js

  $(".hamb_open").click(function () {
    $(".hamburger_menu").addClass("active");
  });

  $(".ham_close").click(function () {
    $(".hamburger_menu").removeClass("active");
  });


  // key policy  js

   document.addEventListener("DOMContentLoaded", function() {
        let boxes = document.querySelectorAll(".cus-program-box");
        let loadMoreBtn = document.getElementById("loadMore");
        let currentItems = 9; // show first 6

        // Show first 6 boxes initially
        for (let i = 0; i < currentItems; i++) {
            if (boxes[i]) boxes[i].style.display = "block";
        }

        loadMoreBtn.addEventListener("click", function() {
            for (let i = currentItems; i < currentItems + 3; i++) {
                if (boxes[i]) boxes[i].style.display = "block";
            }
            currentItems += 3;

            // Hide button if all boxes are shown
            if (currentItems >= boxes.length) {
                loadMoreBtn.style.display = "none";
            }
        });
    });

  // tab accordion js
    tabControl();
    var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});
function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if(tabs.is(':visible')) {
    tabs.find('a').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.item').on('click', function() {
      var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
    });
  } 
}

  

  // Function to open modal Start
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.classList.remove('hide');
  }
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hide');
    modal.classList.remove('show');
  }
  document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', function () {
      const targetModalId = this.getAttribute('data-target').substring(1);
      openModal(targetModalId);
    });
  });
  document.querySelectorAll('.closeModal').forEach(closeButton => {
    closeButton.addEventListener('click', function () {
      const modal = this.closest('.modal');
      closeModal(modal.id);
    });
  });
  window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  gsap.registerPlugin(ScrollTrigger);


function wipeOn() {
  let width = window.innerWidth;
  if (width < 992) return; // Skip animation on small screens

  var wipers = document.querySelectorAll('.image');
  wipers.forEach(function (wipers) {
    var rect = wipers.getBoundingClientRect();
    if (rect.top < (window.innerHeight - 200)) {
      wipers.classList.add('reveal-image');
    }
  });

  var wipers1 = document.querySelectorAll('.image2');
  wipers1.forEach(function (wipers1) {
    var rect1 = wipers1.getBoundingClientRect();
    if (rect1.top < (window.innerHeight - 200)) {
      wipers1.classList.add('reveal-image2');
    }
  });

  var wipers2 = document.querySelectorAll('.image3');
  wipers2.forEach(function (wipers2) {
    var rect2 = wipers2.getBoundingClientRect();
    if (rect2.top < (window.innerHeight - 200)) {
      wipers2.classList.add('reveal-image3');
    }
  });
}

window.addEventListener('load', wipeOn);
window.addEventListener('scroll', wipeOn);
window.addEventListener('resize', wipeOn);

// AOS init (already handles mobile disabling via 'disable: "mobile"')
if ($('[data-aos]').length > 0) {
  AOS.init({
    easing: 'linear',
    disable: 'mobile',
    duration: 2000,
    once: true
  });
}

 $(window).resize(function () {
  adjustMaxContent();
});

function adjustMaxContent() {
  let containerWidth = $(".container").width();
  let windowWidth = $("body").width();

  if (windowWidth > 4000) windowWidth = 4000;

  let maxContentWidth = (windowWidth - (windowWidth - containerWidth) / 2) + 16;

  if (windowWidth >= 1920) {
    $(".max-content-xxl, .max-content-xl, .max-content-lg, .max-content-md, .max-content-sm, .max-content")
      .css("max-width", `${maxContentWidth}px`);

    if (windowWidth >= 2200) {
      $(".max-content-lg").css("max-width", "2018px");
    }
 if (windowWidth >= 2540) {
      $(".max-content-lg").css("max-width", "2180px");
    }
  } else if (windowWidth >= 1400) {
    $(".max-content-xxl, .max-content-xl, .max-content-lg, .max-content-md, .max-content-sm, .max-content")
      .css("max-width", `${maxContentWidth}px`);

  } else if (windowWidth >= 1200) {
    $(".max-content-xxl").css("max-width", "");
    $(".max-content-xl, .max-content-lg, .max-content-md, .max-content-sm, .max-content")
      .css("max-width", `${maxContentWidth}px`);

  } else if (windowWidth >= 992) {
    $(".max-content-xxl, .max-content-xl").css("max-width", "");
    $(".max-content-lg, .max-content-md, .max-content-sm, .max-content")
      .css("max-width", `${maxContentWidth}px`);

  } else if (windowWidth >= 768) {
    $(".max-content-xxl, .max-content-xl, .max-content-lg").css("max-width", "");
    $(".max-content-md, .max-content-sm, .max-content")
      .css("max-width", `${maxContentWidth}px`);

  } else if (windowWidth >= 575) {
    $(".max-content-xxl, .max-content-xl, .max-content-lg, .max-content-md").css("max-width", "");
    $(".max-content-sm, .max-content").css("max-width", `${maxContentWidth}px`);

  } else {
    $(".max-content-xxl, .max-content-xl, .max-content-lg, .max-content-md, .max-content-sm")
      .css("width", "");
    $(".max-content").css("width", `${maxContentWidth}px`);
  }
}



function alignEdgeElements() {
  const windowWidth = window.innerWidth;

  // Only run if width is between 768px and 2700px
  if (windowWidth < 768 || windowWidth > 4000) return;

  const fullSection = document.querySelector('.full_touch');
  const leftElement = document.querySelector('.left_touch');
  const rightElement = document.querySelector('.right_touch');

  if (!fullSection) return;

  const sectionRect = fullSection.getBoundingClientRect();

  // Stop if section is already full-width
  if (sectionRect.width >= windowWidth) {
    if (leftElement) leftElement.style.marginLeft = '0px';
    if (rightElement) rightElement.style.marginRight = '0px';
    return;
  }

  // LEFT align
  if (leftElement) {
    const leftRect = leftElement.getBoundingClientRect();
    const leftGap = leftRect.left;
    leftElement.style.marginLeft = `${-leftGap}px`;
  }

  // RIGHT align
  if (rightElement) {
    const rightRect = rightElement.getBoundingClientRect();
    const rightGap = windowWidth - rightRect.right;
    rightElement.style.marginRight = `${-rightGap}px`;
  }
}

// Run on load and resize
window.addEventListener('load', alignEdgeElements);
window.addEventListener('resize', alignEdgeElements);


function setResponsiveMargin() {
  const minWidth = 1200;
  const maxWidth = 1500;
  const maxMargin = -120; // px
  const startMargin = -20; // px starting margin

  let vw = window.innerWidth;

  if (vw >= minWidth && vw < maxWidth) {
    // linear calculation between startMargin and maxMargin
    let marginValue = startMargin + ((vw - minWidth) / (maxWidth - minWidth)) * (maxMargin - startMargin);

    document.documentElement.style.setProperty("--leftminus120", marginValue + "px");
    document.documentElement.style.setProperty("--rightminus120", marginValue + "px");
  } else if (vw >= maxWidth) {
    // fixed max margin beyond maxWidth
    document.documentElement.style.setProperty("--leftminus120", maxMargin + "px");
    document.documentElement.style.setProperty("--rightminus120", maxMargin + "px");
  } else {
    // reset below minWidth
    document.documentElement.style.removeProperty("--leftminus120");
    document.documentElement.style.removeProperty("--rightminus120");
  }
}

setResponsiveMargin();
window.addEventListener("resize", setResponsiveMargin);

// Mobile Menu

    function togglePanel(panelToShow, activeElement) {
        const isActive = $(panelToShow).hasClass("show");
        $(".mobile_panel01, .mobile_panel02, .mobile_panel03, .mobile_panel04").removeClass("show");
        if (!isActive) {
            $(panelToShow).addClass("show");
        }
        $(".mob_tab01, .mob_tab02, .mob_tab03, .mob_tab04").removeClass("active");
        if (!isActive) {
            $(activeElement).addClass("active");
        }
    }
    $(".mob_tab01").click(function () {
        togglePanel(".mobile_panel01", this);
    });
    $(".mob_tab02").click(function () {
        togglePanel(".mobile_panel02", this);
    });
    $(".mob_tab03").click(function () {
        togglePanel(".mobile_panel03", this);
    });
    $(".mob_tab04").click(function () {
        togglePanel(".mobile_panel04", this);
    });
    // Mobile Menu Tab End

$(function () {
    $('.desktop-nav > ul > li.nav-item').hover(
        function () {
            $(this).find('.mega-dropdown').addClass('active-hover');
            $('body').addClass('active_head'); // add class to body
        },
        function () {
            $(this).find('.mega-dropdown').removeClass('active-hover');
            $('body').removeClass('active_head'); // remove class from body
        }
    );
});
$(function () {
    $('.nav-container .nav-list').hover(
        function () {
            $(this).addClass('active-hover');
            $('body').addClass('active_head');
        },
        function () {
            $(this).removeClass('active-hover');
            $('body').removeClass('active_head');
        }
    );
});

})(jQuery);




