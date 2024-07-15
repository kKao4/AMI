function init() {
  const header = document.querySelector("header");
  const logoHeader = document.querySelector("header .logo");
  const modalMenuTrigger = document.querySelector(".modal-menu-trigger");
  const modalMenuDesktop = document.querySelector(".modal-menu-desktop");
  const modalMenuMobile = document.querySelector(".modal-menu-mobile");
  const closeModalMenuDesktopBtn = document.querySelector(".modal-menu-desktop .close-modal-menu-btn");
  const closeModalMenuMobileBtn = document.querySelector(".modal-menu-mobile .close-modal-menu-btn");

  kKao4DetectDirectionScroll(
    "root",
    () => {
      header.style.transform = "none";
    },
    () => {
      header.style.transform = "translate(0, -100%)";
    }
  );
  
  if (window.innerWidth > 768) {
    window.addEventListener("scroll", () => {
      const scrollTopPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollTopPosition <= 0) {
        logoHeader.classList.add("logoBig");
      } else {
        logoHeader.classList.remove("logoBig");
      }
    });

    kKao4IsInViewport(
      ".desktop-banner",
      () => {
        header.classList.remove("not-in-banner");
      },
      () => {
        header.classList.add("not-in-banner");
      },
      0
    );

    modalMenuTrigger.addEventListener("click", () => {
      modalMenuDesktop.style.transform = "none";
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline({});
      tl.fromTo(
        ".modal-menu-deco-4",
        { scale: 1, autoAlpha: 1, xPercent: 0, yPercent: 0 },
        {
          scale: 0.54,
          autoAlpha: 0,
          xPercent: 60,
          yPercent: 6,
          duration: 1,
          ease: "power2.inOut",
        },
        "+=0.8"
      );
      tl.fromTo(
        ".modal-menu-deco-5",
        { scale: 0.54, autoAlpha: 0, bottom: "-8rem", right: "-20rem" },
        {
          scale: 1,
          autoAlpha: 1,
          bottom: "-20rem",
          right: "47rem",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.fromTo(
        ".modal-menu-deco-6",
        { bottom: "-8rem", right: "23.5rem", autoAlpha: 0 },
        {
          bottom: "8rem",
          right: "-6rem",
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
      tl.fromTo(
        ".modal-menu-deco-7",
        { bottom: 0, right: "100rem", autoAlpha: 0 },
        {
          bottom: "-8rem",
          right: "23.5rem",
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
    });
    closeModalMenuDesktopBtn.addEventListener("click", () => {
      modalMenuDesktop.style.transform = "translate(0, -100%)";
      document.body.style.overflow = "auto";
    });
  } else {
    kKao4IsInViewport(
      ".mobile-banner",
      () => {
        header.classList.remove("not-in-banner");
      },
      () => {
        header.classList.add("not-in-banner");
      },
      0
    );
  }

  if (window.innerWidth < 768) {
    modalMenuTrigger.addEventListener("click", () => {
      modalMenuMobile.style.transform = "none";
    });
    closeModalMenuMobileBtn.addEventListener("click", () => {
      modalMenuMobile.style.transform = "translate(-100%, 0)";
    });
    const accordionTrigger = document.querySelector(
      ".modal-menu-mobile .accordion-container .accordion .accordion-trigger"
    );
    const accordionContentContainer = document.querySelector(".modal-menu-mobile .accordion-container .accordion ul");
    const iconPlusAccordion = document.querySelector(
      ".modal-menu-mobile .accordion-container .accordion .accordion-trigger .icon-container > svg:first-of-type"
    );
    const iconMinusAccordion = document.querySelector(
      ".modal-menu-mobile .accordion-container .accordion .accordion-trigger .icon-container > svg:last-of-type"
    );
    accordionTrigger.addEventListener("click", () => {
      if (accordionContentContainer.style.maxHeight) {
        accordionContentContainer.style.maxHeight = null;
        accordionContentContainer.style.opacity = 0;
        iconPlusAccordion.style.opacity = 1;
        iconMinusAccordion.style.opacity = 0;
      } else {
        accordionContentContainer.style.maxHeight = accordionContentContainer.scrollHeight + "px";
        accordionContentContainer.style.opacity = 1;
        iconPlusAccordion.style.opacity = 0;
        iconMinusAccordion.style.opacity = 1;
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", init);
