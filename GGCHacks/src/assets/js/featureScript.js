document.addEventListener("DOMContentLoaded", function () {
  const featuresHeaderSection = document.querySelector(".features-header-section");

  function handleScroll() {
    const rect = featuresHeaderSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      featuresHeaderSection.classList.add("in-view");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});
