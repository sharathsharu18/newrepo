document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.querySelector("form[method='post']");
  var themeToggle = document.getElementById("theme-toggle");
  var root = document.documentElement;

  function updateTheme(theme) {
    root.dataset.theme = theme;
    themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", theme === "dark");
    localStorage.setItem("theme", theme);
  }

  if (themeToggle) {
    var storedTheme = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    updateTheme(initialTheme);

    themeToggle.addEventListener("click", function () {
      var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      updateTheme(nextTheme);
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you! Your message has been prepared for review.");
      contactForm.reset();
    });
  }
});
