function init() {
  // SECTION: banner
  const header = document.querySelector("header");
  const bannerContentContainer = document.querySelector(".desktop-banner .content-container");
  const dotAnimation = document.querySelector(".desktop-banner .dot-animation");
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    const tlBanner = gsap.timeline({});
    tlBanner.addLabel("root");
    tlBanner.from(
      ".letter-fadeInUp",
      {
        y: "0.8rem",
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: CustomEase.create("custom", "M0,0 C0.35,0.423 0.341,0.464 0.382,0.54 0.433,0.635 0.582,1 1,1"),
      },
      "root"
    );
    tlBanner.to(dotAnimation, { autoAlpha: 1, duration: 0.0001 }, "root");
    tlBanner.to(
      dotAnimation,
      {
        width: "1.5rem",
        height: "1.5rem",
        duration: 2,
        ease: CustomEase.create("custom", "M0,0 C0.35,0.423 0.341,0.464 0.382,0.54 0.433,0.635 0.582,1 1,1"),
        motionPath: {
          path: "M27.196,84.8 C115.99,-55.407 171.786,71.242 176.798,54.195 181.851,36.992 210.573,-11.995 263.999,-25.599 ",
          align: "self",
        },
      },
      "root"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#35AA94",
        duration: 0.16,
      },
      "root"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#1EA0CA",
        duration: 0.16,
      },
      "root+=0.16"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#0088CB",
        duration: 0.16,
      },
      "root+=0.32"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#3777BC",
        duration: 0.16,
      },
      "root+=0.48"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#5056A5",
        duration: 0.16,
      },
      "root+=0.64"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#996598",
        duration: 0.16,
      },
      "root+=0.8"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#D24D70",
        duration: 0.16,
      },
      "root+=0.96"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#D24D70",
        duration: 0.16,
      },
      "root+=1.12"
    );
    tlBanner.to(
      dotAnimation,
      {
        backgroundColor: "#ED1B2F",
        duration: 0.16,
      },
      "root+=1.28"
    );

    tlBanner.from(
      ".dot-fadeIn",
      {
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: CustomEase.create("custom", "M0,0 C0.35,0.423 0.341,0.464 0.382,0.54 0.433,0.635 0.582,1 1,1"),
      },
      "root"
    );
    tlBanner.from(bannerContentContainer, { autoAlpha: 0, duration: 0.25 }, ">-=0.25");
    tlBanner.from(bannerContentContainer, {
      clipPath: "circle(1.15% at 57.125% 36.75%)",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        header.style.transform = "none";
      },
    });
    tlBanner.from(".heading-banner-word", { autoAlpha: 0, y: "1.25rem", duration: 0.6, stagger: 0.04 });
  });

  // SECTION: section 2
  mm.add("(min-width: 768px)", () => {
    const tlSection2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-khoi-nguon-tu-tinh-bang-huu",
        toggleActions: "play pause play none",
        start: "top top+=80%",
        end: "bottom top",
      },
    });
    tlSection2.from(".section-khoi-nguon-tu-tinh-bang-huu .section-deco-1", {
      scale: 1.12,
      autoAlpha: 0,
      y: "4rem",
      duration: 0.8,
      ease: "power1.inOut",
    });
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .section-deco-5",
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        y: "-2rem",
        ease: "power1.inOut",
      },
      "<"
    );
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .section-deco-6",
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        y: "2rem",
        ease: "power1.inOut",
      },
      "<"
    );
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .section-deco-7",
      {
        scale: 0.6,
        autoAlpha: 0,
        duration: 0.8,
        x: "-2rem",
        ease: "power1.inOut",
      },
      "<"
    );
    tlSection2.from(
      ".section-khoi-nguon-tu-tinh-bang-huu .content-container > *",
      {
        y: "4rem",
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  kKao4RoundDecoScaleButton(".primary-btn", ".btn-round-deco");

  // SECTION: section 3
  mm.add("(min-width: 768px)", () => {
    gsap.from(".section-tam-nhin h4", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        trigger: ".section-tam-nhin .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
    gsap.from(".section-tam-nhin .heading-line", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-tam-nhin .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });

  // SECTION: section 4
  mm.add("(min-width: 768px)", () => {
    gsap.from(".section-su-menh-desktop h4", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
    gsap.from(".section-su-menh-desktop h2 > .heading-line", {
      autoAlpha: 0,
      y: "2rem",
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
    const rightCol = document.querySelector(".section-su-menh-desktop .sticky-container .right-col");
    const endDistance = (parseFloat(window.getComputedStyle(rightCol).paddingTop) + 6.5) * 2;
    gsap.to(".section-su-menh-desktop .sticky-container .left-col p", {
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .sticky-container .left-col",
        endTrigger: ".section-su-menh-desktop .sticky-container .left-col",
        start: "top top",
        end: `bottom+=${endDistance}px bottom`,
        pin: true,
        anticipatePin: 1,
      },
    });
    const leftColPinSpacer = document.querySelector(".section-su-menh-desktop .sticky-container .pin-spacer");
    window.addEventListener("load", () => {
      leftColPinSpacer.style.flexBasis = "15rem";
    });
    gsap.to(".section-su-menh-desktop .sticky-container .right-col .image-container", {
      scrollTrigger: {
        trigger: ".section-su-menh-desktop .sticky-container .right-col",
        endTrigger: ".section-su-menh-desktop .sticky-container .right-col",
        start: "top top",
        end: `bottom+=${endDistance}px bottom`,
        pin: true,
        anticipatePin: 1,
      },
    });
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 768) {
      const activeItemsText = document.querySelector(".section-su-menh-desktop .active-item-index-text");
      const totalItemsText = document.querySelector(".section-su-menh-desktop .total-item-text");
      const items = document.querySelectorAll(".section-su-menh-desktop .sticky-container .mid-col .item");
      const imageItems = document.querySelectorAll(".section-su-menh-desktop .sticky-container .right-col img");
      totalItemsText.textContent = kKao4FormatNumber(imageItems.length);
      for (let i = 0; i < items.length; i++) {
        const rect = items[i].getBoundingClientRect();
        if (rect.top > 0) {
          items.forEach((item, i) => {
            item.style.opacity = 0.4;
            imageItems[i].style.opacity = 0;
            imageItems[i].style.pointerEvents = "none";
          });
          items[i].style.opacity = 1;
          imageItems[i].style.opacity = 1;
          imageItems[i].style.pointerEvents = "all";
          activeItemsText.textContent = kKao4FormatNumber(Math.max(Math.min(i + 1, items.length), 0));
          break;
        }
      }
    }
  });

  if (window.innerWidth < 768) {
    const items = document.querySelectorAll(".section-su-menh-mobile .item");
    const totalItems = kKao4FormatNumber(items.length);
    items.forEach((item, i) => {
      indexContainer = item.querySelector(".index-container");
      item.querySelector(".index-item").textContent = kKao4FormatNumber(i + 1);
      item.querySelector(".total-item").textContent = totalItems;
    });
  }

  // SECTION: section 5
  mm.add("(min-width: 768px)", () => {
    gsap.from(".section-linh-vuc-dau-tu-desktop .heading-container > *", {
      y: "4rem",
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-linh-vuc-dau-tu-desktop .heading-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });

  if (window.innerWidth > 768) {
    const swiperLinhVucDauTu = new Swiper(".section-linh-vuc-dau-tu-desktop .swiper-linh-vuc-dau-tu", {
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    const drawSVGArray = ["40%", "54%", "68%", "83%", "100%"];
    gsap.set(".swiper-progress-bar-path", { drawSVG: drawSVGArray[0], autoAlpha: 1 });
    const slideContents = document.querySelectorAll(".section-linh-vuc-dau-tu-desktop .slide-content");
    const paginationButtons = document.querySelectorAll(".section-linh-vuc-dau-tu-desktop .pagination-btn");
    swiperLinhVucDauTu.on("realIndexChange", () => {
      slideContents.forEach((slideContent, i) => {
        slideContent.style.opacity = 0;
        slideContent.style.pointerEvents = "none";
        paginationButtons[i].classList.remove("pagination-btn-active");
      });
      slideContents[swiperLinhVucDauTu.realIndex].style.opacity = 1;
      slideContents[swiperLinhVucDauTu.realIndex].style.pointerEvents = "all";
      paginationButtons[swiperLinhVucDauTu.realIndex].classList.add("pagination-btn-active");
      gsap.to(".swiper-progress-bar-path", { drawSVG: drawSVGArray[swiperLinhVucDauTu.realIndex], duration: 0.8 });
    });
    paginationButtons.forEach((paginationButton, i) => {
      paginationButton.addEventListener("click", () => {
        swiperLinhVucDauTu.slideTo(i, 800);
      });
    });
  } else {
    const swiperLinhVucDauTu = new Swiper(".section-linh-vuc-dau-tu-mobile .swiper-linh-vuc-dau-tu", {
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    const slideContents = document.querySelectorAll(".section-linh-vuc-dau-tu-mobile .slide-content");
    const paginationButtons = document.querySelectorAll(".section-linh-vuc-dau-tu-mobile .pagination-btn");
    swiperLinhVucDauTu.on("realIndexChange", () => {
      slideContents.forEach((slideContent, i) => {
        slideContent.style.opacity = 0;
        slideContent.style.pointerEvents = "none";
        paginationButtons[i].classList.remove("pagination-btn-active");
      });
      slideContents[swiperLinhVucDauTu.realIndex].style.opacity = 1;
      slideContents[swiperLinhVucDauTu.realIndex].style.pointerEvents = "all";
      paginationButtons[swiperLinhVucDauTu.realIndex].classList.add("pagination-btn-active");
    });
    paginationButtons.forEach((paginationButton, i) => {
      paginationButton.addEventListener("click", () => {
        swiperLinhVucDauTu.slideTo(i, 800);
      });
    });
  }

  // SECTION: section 6
  mm.add("(min-width: 768px)", () => {
    gsap.to(".section-dau-an .content-container", {
      scrollTrigger: {
        trigger: ".section-dau-an .content-container",
        endTrigger: ".section-dau-an",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        anticipatePin: 1,
      },
    });
  });

  // SECTION: section 7
  mm.add("(min-width: 768px)", () => {
    gsap.to(".section-tinh-bang-huu .content-container-desktop .not-active", {
      autoAlpha: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".section-tinh-bang-huu .content-container-desktop",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });
  mm.add("(max-width: 768px)", () => {
    gsap.to(".section-tinh-bang-huu .content-container-mobile .not-active", {
      autoAlpha: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".section-tinh-bang-huu .content-container-mobile",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });

  // SECTION: section 8
  mm.add("(min-width: 768px)", () => {
    gsap.from(".section-hop-tac-vung-ben-desktop .content-container > *", {
      y: "4rem",
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-hop-tac-vung-ben-desktop .content-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });

  if (window.innerWidth < 768) {
    const swiperHopTacVungBen = new Swiper(".swiper-hop-tac-vung-ben", {
      slidesPerView: 1.25,
      speed: 800,
      loop: true,
      spaceBetween: (window.innerWidth / 100) * 4.267 * 1.5,
      navigation: {
        prevEl: ".swiper-hop-tac-vung-ben .swiper-prev-btn",
        nextEl: ".swiper-hop-tac-vung-ben .swiper-next-btn",
      },
    });
    const changeStyleSwiperSlide = () => {
      swiperHopTacVungBen.slides.forEach((slide, i) => {
        slide.style.opacity = swiperHopTacVungBen.activeIndex === i ? 1 : 0.2;
      });
    };
    changeStyleSwiperSlide();
    swiperHopTacVungBen.on("slideChange", () => {
      changeStyleSwiperSlide();
    });
  } else {
    const items = document.querySelectorAll(".section-hop-tac-vung-ben-desktop .thumb-container .item-container");
    const imgsPreview = document.querySelectorAll(".section-hop-tac-vung-ben-desktop .item-preview-container img");
    imgsPreview[0].style.opacity = 1;
    items.forEach((item, i) => {
      item.addEventListener("click", () => {
        items.forEach((item) => item.classList.remove("item-container-active"));
        item.classList.add("item-container-active");
        imgsPreview.forEach((imgPreview) => (imgPreview.style.opacity = 0));
        imgsPreview[i].style.opacity = 1;
      });
    });
  }

  // SECTION: section 9
  kKao4Loop({
    containerEl: ".section-doi-tac-tieu-bieu .item-container",
    itemEl: ".section-doi-tac-tieu-bieu .loop-item",
    speed: window.innerWidth > 768 ? 3400 : 2400,
  });

  // SECTION: section 10
  mm.add("(min-width: 768px)", () => {
    gsap.from(".section-co-gi-moi .content-container > *", {
      y: "4rem",
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-co-gi-moi .content-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });

  const swiperCoGiMoi = new Swiper(".swiper-co-gi-moi", {
    slidesPerView: 1.2,
    loop: true,
    speed: 800,
    spaceBetween: window.innerWidth > 768 ? (window.innerWidth / 100) * 1.5 : (window.innerWidth / 100) * 4.267 * 0.75,
    slidesOffsetBefore: window.innerWidth > 768 ? 0 : (window.innerWidth / 100) * 4.267 * 0.75,
    slidesOffsetAfter: window.innerWidth > 768 ? 0 : (window.innerWidth / 100) * 4.267 * 0.75,
    navigation: {
      prevEl: ".section-co-gi-moi .swiper-prev-btn",
      nextEl: ".section-co-gi-moi .swiper-next-btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
    },
  });

  // SECTION: section 11
  mm.add("(min-width: 768px)", () => {
    gsap.from(".section-dong-hanh-tien-buoc .content-container > *", {
      y: "4rem",
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".section-dong-hanh-tien-buoc .content-container",
        start: "top top+=80%",
        end: "bottom top",
        toggleActions: "play pause play none",
      },
    });
  });
}

window.addEventListener("DOMContentLoaded", init);
