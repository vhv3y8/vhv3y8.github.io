let goToTopBtn = document.getElementById("goToTop");

window.addEventListener("load", () => {
  goToTopBtn.addEventListener("click", () => {
    // searchInput.focus();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  });
});

window.addEventListener("scroll", (e) => {
  if (goToTopBtn !== null) {
    if (window.oldScroll > window.scrollY && 50 < window.scrollY) {
      // up
      goToTopBtn.classList.remove("hide");
    } else {
      // down
      goToTopBtn.classList.add("hide");
    }
    window.oldScroll = window.scrollY;
  }
});

