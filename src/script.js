
/* =========================================================
   DSC RESELLER WEBSITE
   COMPLETE JAVASCRIPT
   PROFESSIONAL PAGE ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

      const isOpen =
        mobileMenu.classList.contains("menu-open");

      if (!isOpen) {

        mobileMenu.classList.add("menu-open");

        mobileMenu.style.gridTemplateRows = "1fr";
        mobileMenu.style.opacity = "1";

        if (hamburgerIcon) {
          hamburgerIcon.style.transform =
            "scale(0) rotate(90deg)";
          hamburgerIcon.style.opacity = "0";
        }

        if (closeIcon) {
          closeIcon.style.transform =
            "scale(1) rotate(0deg)";
          closeIcon.style.opacity = "1";
        }

        menuBtn.setAttribute(
          "aria-expanded",
          "true"
        );

      } else {

        mobileMenu.classList.remove("menu-open");

        mobileMenu.style.gridTemplateRows = "0fr";
        mobileMenu.style.opacity = "0";

        if (hamburgerIcon) {
          hamburgerIcon.style.transform =
            "scale(1) rotate(0deg)";
          hamburgerIcon.style.opacity = "1";
        }

        if (closeIcon) {
          closeIcon.style.transform =
            "scale(0) rotate(90deg)";
          closeIcon.style.opacity = "0";
        }

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });
  }


  /* =========================================================
     BANNER ANIMATION
     DO NOT CHANGE
     PAGE OPEN / REFRESH
  ========================================================= */

  const banner =
    document.getElementById("banner-inn-total");

  if (banner) {

    const bannerImage =
      banner.querySelector(".col2");

    const bannerTitle =
      banner.querySelector("h1");

    const bannerDescription =
      banner.querySelector("h2");

    const bannerButton =
      banner.querySelector(".banner-button");


    /* Initial state */

    if (bannerImage) {
      bannerImage.style.opacity = "0";
      bannerImage.style.transform =
        "translateX(100px) scale(0.92)";
    }

    if (bannerTitle) {
      bannerTitle.style.opacity = "0";
      bannerTitle.style.transform =
        "translateY(45px)";
    }

    if (bannerDescription) {
      bannerDescription.style.opacity = "0";
      bannerDescription.style.transform =
        "translateY(35px)";
    }

    if (bannerButton) {
      bannerButton.style.opacity = "0";
      bannerButton.style.transform =
        "translateY(30px) scale(0.9)";
    }


    /* Image */

    setTimeout(function () {

      if (bannerImage) {

        bannerImage.style.transition =
          "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

        bannerImage.style.opacity = "1";

        bannerImage.style.transform =
          "translateX(0) scale(1)";
      }

    }, 150);


    /* Heading */

    setTimeout(function () {

      if (bannerTitle) {

        bannerTitle.style.transition =
          "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)";

        bannerTitle.style.opacity = "1";

        bannerTitle.style.transform =
          "translateY(0)";
      }

    }, 350);


    /* Description */

    setTimeout(function () {

      if (bannerDescription) {

        bannerDescription.style.transition =
          "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)";

        bannerDescription.style.opacity = "1";

        bannerDescription.style.transform =
          "translateY(0)";
      }

    }, 550);


    /* Button */

    setTimeout(function () {

      if (bannerButton) {

        bannerButton.style.transition =
          "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

        bannerButton.style.opacity = "1";

        bannerButton.style.transform =
          "translateY(0) scale(1)";
      }

    }, 750);

  }


  /* =========================================================
     PROFESSIONAL SCROLL ANIMATION ENGINE
  ========================================================= */

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  function playAnimation(
    element,
    keyframes,
    duration = 900,
    delay = 0
  ) {

    if (!element) return;


    /* Reduced motion */

    if (reduceMotion) {

      element.style.opacity = "1";
      element.style.transform = "none";

      return;
    }


    setTimeout(function () {

      element.animate(
        keyframes,
        {
          duration: duration,
          delay: 0,
          easing:
            "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards"
        }
      );

    }, delay);

  }


  /* =========================================================
     INTERSECTION OBSERVER
  ========================================================= */

  const animationObserver =
    new IntersectionObserver(
      function (entries, observer) {

        entries.forEach(function (entry) {

          if (!entry.isIntersecting) {
            return;
          }


          const element =
            entry.target;

          const animationType =
            element.dataset.animation ||
            "up";


          /* -----------------------------------------
             UP
          ----------------------------------------- */

          if (animationType === "up") {

            playAnimation(
              element,
              [
                {
                  opacity: 0,
                  transform:
                    "translateY(55px) scale(0.98)"
                },
                {
                  opacity: 1,
                  transform:
                    "translateY(0) scale(1)"
                }
              ],
              950
            );

          }


          /* -----------------------------------------
             LEFT
          ----------------------------------------- */

          if (animationType === "left") {

            playAnimation(
              element,
              [
                {
                  opacity: 0,
                  transform:
                    "translateX(-70px)"
                },
                {
                  opacity: 1,
                  transform:
                    "translateX(0)"
                }
              ],
              950
            );

          }


          /* -----------------------------------------
             RIGHT
          ----------------------------------------- */

          if (animationType === "right") {

            playAnimation(
              element,
              [
                {
                  opacity: 0,
                  transform:
                    "translateX(70px)"
                },
                {
                  opacity: 1,
                  transform:
                    "translateX(0)"
                }
              ],
              950
            );

          }


          /* -----------------------------------------
             SCALE
          ----------------------------------------- */

          if (animationType === "scale") {

            playAnimation(
              element,
              [
                {
                  opacity: 0,
                  transform:
                    "scale(0.88)"
                },
                {
                  opacity: 1,
                  transform:
                    "scale(1)"
                }
              ],
              900
            );

          }


          observer.unobserve(element);

        });

      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );


  /* =========================================================
     HELPER
     ADD ANIMATION
  ========================================================= */

  function addAnimation(
    element,
    type = "up",
    delay = 0
  ) {

    if (!element) return;


    /*
      Remove old Tailwind hidden animation classes
      so they cannot block JS animation.
    */

    element.classList.remove(
      "opacity-0",
      "translate-y-10",
      "translate-y-12",
      "translate-y-16",
      "translate-x-10",
      "-translate-x-10",
      "reveal-left",
      "reveal-right",
      "reveal-up",
      "show",
      "show-about",
      "show-associate",
      "show-kit"
    );


    element.dataset.animation =
      type;

    element.style.opacity = "0";


    if (type === "left") {

      element.style.transform =
        "translateX(-70px)";

    } else if (type === "right") {

      element.style.transform =
        "translateX(70px)";

    } else if (type === "scale") {

      element.style.transform =
        "scale(0.88)";

    } else {

      element.style.transform =
        "translateY(55px)";
    }


    /*
      Delay through observer.
    */

    if (delay > 0) {

      element.dataset.animationDelay =
        delay;

    }


    animationObserver.observe(
      element
    );

  }


  /* =========================================================
     ABOUT SECTION
  ========================================================= */

  const aboutSection =
    document.getElementById("joinus");

  if (aboutSection) {

    /*
      Main white card
    */

    const aboutCard =
      aboutSection.querySelector(
        "[data-about-animation]"
      );


    if (aboutCard) {

      addAnimation(
        aboutCard,
        "up"
      );

    }


    /*
      About small label
    */

    const aboutLabel =
      aboutSection.querySelector(
        "[data-about-label]"
      );


    if (aboutLabel) {

      addAnimation(
        aboutLabel,
        "left"
      );

    }


    /*
      About heading
    */

    const aboutHeading =
      aboutSection.querySelector("h2");


    if (aboutHeading) {

      addAnimation(
        aboutHeading,
        "up"
      );

    }


    /*
      About subtitle
    */

    const aboutSubtitle =
      aboutSection.querySelector("h3");


    if (aboutSubtitle) {

      addAnimation(
        aboutSubtitle,
        "up"
      );

    }


    /*
      About paragraphs
    */

    const aboutParagraphs =
      aboutSection.querySelectorAll(
        ".max-w-4xl p"
      );


    aboutParagraphs.forEach(
      function (paragraph) {

        addAnimation(
          paragraph,
          "up"
        );

      }
    );


    /*
      About bottom information
    */

    const bottomInfo =
      aboutSection.querySelector(
        ".mt-8.border-t"
      );


    if (bottomInfo) {

      addAnimation(
        bottomInfo,
        "up"
      );

    }

  }


  /* =========================================================
     OUR ASSOCIATE SECTION
  ========================================================= */

  const associateSection =
    document.getElementById("content1");

  if (associateSection) {

    const associateCard =
      associateSection.querySelector(
        ".mx-auto > div"
      );


    if (associateCard) {

      /*
        Main card
      */

      addAnimation(
        associateCard,
        "up"
      );


      /*
        Image
      */

      const associateImage =
        associateCard.querySelector(
          ".flex.justify-center"
        );


      if (associateImage) {

        addAnimation(
          associateImage,
          "left"
        );

      }


      /*
        Right content
      */

      const associateContent =
        associateCard.querySelector(
          "div:nth-child(2)"
        );


      if (associateContent) {

        addAnimation(
          associateContent,
          "right"
        );

      }


      /*
        Benefits list
      */

      const benefits =
        associateCard.querySelectorAll(
          "ul li"
        );


      benefits.forEach(
        function (item) {

          addAnimation(
            item,
            "up"
          );

        }
      );

    }

  }


  /* =========================================================
     DOWNLOAD APPLICATION KIT
  ========================================================= */

  const kitSection =
    document.getElementById("content4");

  if (kitSection) {

    const kitCard =
      kitSection.querySelector(
        ".mx-auto > div"
      );


    if (kitCard) {

      /*
        Main card
      */

      addAnimation(
        kitCard,
        "up"
      );


      /*
        Left content
      */

      const kitLeft =
        kitCard.querySelector(
          ".flex.flex-col"
        );


      if (kitLeft) {

        addAnimation(
          kitLeft,
          "left"
        );

      }


      /*
        Right form box
      */

      const kitRight =
        kitCard.querySelector(
          "form"
        )?.parentElement;


      if (kitRight) {

        addAnimation(
          kitRight,
          "right"
        );

      }


      /*
        Form inputs
      */

      const formElements =
        kitCard.querySelectorAll(
          "form input, form select, form button"
        );


      formElements.forEach(
        function (field) {

          addAnimation(
            field,
            "up"
          );

        }
      );

    }

  }


  /* =========================================================
     OTHER PAGE SECTIONS
     AUTOMATIC PROFESSIONAL ANIMATION
  ========================================================= */

  const allSections =
    document.querySelectorAll(
      "section"
    );


  allSections.forEach(
    function (section) {

      /*
        Skip banner
        Skip About
        Skip Associate
        Skip Kit
      */

      if (
        section.id ===
          "banner-inn-total" ||
        section.id === "joinus" ||
        section.id === "content1" ||
        section.id === "content4"
      ) {
        return;
      }


      const container =
        section.querySelector(
          ":scope > .mx-auto"
        );


      if (!container) return;


      /*
        Section main container
      */

      addAnimation(
        container,
        "up"
      );


      /*
        Heading
      */

      const heading =
        section.querySelector(
          "h2, h3"
        );


      if (heading) {

        addAnimation(
          heading,
          "up"
        );

      }


      /*
        Cards
      */

      const cards =
        section.querySelectorAll(
          ".grid > div, .flex > div"
        );


      cards.forEach(
        function (card, index) {

          /*
            Alternate animation
            left / right
          */

          if (index % 2 === 0) {

            addAnimation(
              card,
              "left"
            );

          } else {

            addAnimation(
              card,
              "right"
            );

          }

        }
      );

    }
  );


  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(
      function (link) {

        link.addEventListener(
          "click",
          function (event) {

            const targetId =
              link.getAttribute(
                "href"
              );


            if (
              !targetId ||
              targetId === "#"
            ) {
              return;
            }


            const target =
              document.querySelector(
                targetId
              );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }
        );

      }
    );


  /* =========================================================
     FORM VALIDATION
  ========================================================= */

  window.frmContactValidate =
    function () {

      const form =
        document.forms[
          "contact_form"
        ];


      if (!form) {
        return true;
      }


      const name =
        form.querySelector(
          '[name="full_name"]'
        );


      const email =
        form.querySelector(
          '[name="email"]'
        );


      const mobile =
        form.querySelector(
          '[name="mobile"]'
        );


      if (
        name &&
        name.value.trim().length < 2
      ) {

        alert(
          "Please enter your full name."
        );

        name.focus();

        return false;
      }


      if (
        email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          email.value.trim()
        )
      ) {

        alert(
          "Please enter a valid email address."
        );

        email.focus();

        return false;
      }


      if (
        mobile &&
        !/^[0-9]{10}$/.test(
          mobile.value.trim()
        )
      ) {

        alert(
          "Please enter a valid 10 digit mobile number."
        );

        mobile.focus();

        return false;
      }


      return true;

    };


  /* =========================================================
     PAGE READY
  ========================================================= */

  document.body.classList.add(
    "page-loaded"
  );

});





/* =========================================================
   FOOTER SCROLL ANIMATION
========================================================= */

const footer = document.getElementById("site-footer");

if (footer) {
  const footerItems = footer.querySelectorAll(
    "[data-footer-animation]"
  );

  footerItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";

    item.style.transition =
      "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), " +
      "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)";

    item.style.transitionDelay = `${index * 120}ms`;
  });

  const footerObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        const items = entry.target.querySelectorAll(
          "[data-footer-animation]"
        );

        items.forEach(function (item) {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        });

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
    }
  );

  footerObserver.observe(footer);
}