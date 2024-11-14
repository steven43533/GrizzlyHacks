document.addEventListener("DOMContentLoaded", function () {
  const featureHeaderSection = document.querySelector(".features-header-section");

  function handleScroll() {
    const rect = featureHeaderSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      featureHeaderSection.classList.add("in-view");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check in case it's already in view

  console.log("featureScript.js is loaded");

});
