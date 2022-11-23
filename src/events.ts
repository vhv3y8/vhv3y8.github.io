import { applySearchUI } from "./ui/index";
import { search, toggleTag, getOption } from "./search"

let searchTagElems: HTMLLIElement[] = Array.from(document.querySelectorAll("li.searchTag"));
let searchInput = document.querySelector("input#searchInput");
let goToTopBtn: HTMLButtonElement | null = document.querySelector("button#goToTop");

window.addEventListener("load", () => {
  console.log("hello from events");

  let giphyIframe = document.querySelector("iframe");
  if (giphyIframe !== null) {
    giphyIframe.onclick = () => { };
  }

  searchTagElems.forEach((searchTagElem: HTMLLIElement) => {
    searchTagElem.classList.add("easeOutBackgroundColor");

    // add click event listeners for tag list tags
    searchTagElem.addEventListener("click", () => {
      // change ui
      searchTagElem.classList.toggle("chromeYellow");

      // apply search
      if (searchTagElem.dataset.name !== undefined) {
        // toggle tag, search and apply ui
        toggleTag(searchTagElem.dataset.name);
        console.log(`now option is`);
        console.log(getOption());
        applySearchUI(search());
      }
    })
  });

  // add search text input onchange event
  let searchInputBlock: boolean = false;
  if (searchInput !== null) {
    searchInput.addEventListener("change", () => {

    })
  }

  // go to top button
  if (goToTopBtn !== null) {
    goToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    });
  }
});

window.addEventListener("scroll", (e) => {
  if (goToTopBtn !== null) {
    if ((window as any).oldScroll < window.scrollY) {
      // down
      goToTopBtn.classList.remove("hide");
      // TODO : show go to top button
    } else {
      // up
      goToTopBtn.classList.add("hide");
      // TODO : hide go to top button
    }
    (window as any).oldScroll = window.scrollY;
  }
});