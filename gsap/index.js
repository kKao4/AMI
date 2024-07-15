function init() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, MotionPathHelper, MotionPathPlugin, CustomEase);

  ScrollSmoother.create({
    smooth: 0.8,
    effects: true,
  });
}

window.addEventListener("DOMContentLoaded", init);
