document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.querySelector("form[method='post']");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you! Your message has been prepared for review.");
      contactForm.reset();
    });
  }
});
