function init() {
  const forms = document.querySelectorAll(".email-container");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      kKao4Notification({ text: "Cảm ơn bạn đã đăng ký!", duration: 4000 });
    });
  });
}

window.addEventListener("DOMContentLoaded", init);
