import { applySearchUI } from "./ui/index";
import { search, toggleTag, getOption } from "./search"

let searchTagElems: HTMLLIElement[] = Array.from(document.querySelectorAll("li.searchTag"));
let searchInput = document.querySelector("input#searchInput");

window.addEventListener("load", () => {
  console.log("hello from events");

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
});

window.addEventListener("scroll", (e) => {
  if ((window as any).oldScroll < window.scrollY) {
    // down
    // TODO : show go to top button
  } else {
    // up
    // TODO : hide go to top button
  }
  (window as any).oldScroll = window.scrollY;
});