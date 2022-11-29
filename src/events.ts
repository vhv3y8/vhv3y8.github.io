// import { applySearchUI } from "./ui/index";
import { search, toggleTag, setSearchText, getOption } from "./search"
import { convertToLowerHyphen } from "./utils";

let searchInput = document.querySelector("input#searchInput") as HTMLInputElement;
let goToTopBtn: HTMLButtonElement | null = document.querySelector("button#goToTop");
let openModalElements = document.querySelectorAll("button.more") as NodeListOf<HTMLElement>;

window.addEventListener("load", () => {
  console.log("hello from events");

  // search text input onchange event
  let searchInputBlock: boolean = false;
  if (searchInput !== null) {
    searchInput.addEventListener("input", (e) => {
      setSearchText(searchInput.value);
      console.log(`now option is`);
      console.log(getOption());
      search();
    })
  }

  // go to top button event
  if (goToTopBtn !== null) {
    goToTopBtn.addEventListener("click", () => {
      // searchInput.focus();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    });
  }

  // click event for modal open (a.more tag)
  openModalElements.forEach(moreElem => {
    moreElem.addEventListener("click", () => {
      history.pushState({
        projectName: moreElem.dataset.projectname
      }, "", `?projectname=${moreElem.dataset.projectname}`);
      console.log("hello from more element click event");
      (document.querySelector("main") as HTMLElement).classList.add("none");
      (document.getElementById("modalContainer") as HTMLElement).classList.remove("none");
      document.querySelector(`#modalContainer article.${moreElem.dataset.projectname}`)?.classList.remove("none");
    });
  });

  // click event for modal close button
  document.querySelector("button#testt")?.addEventListener("click", () => {
    history.back();
  });
});

window.addEventListener("popstate", (e) => {
  console.log("pop state event called.");
})

window.addEventListener("scroll", (e) => {
  if (goToTopBtn !== null) {
    if ((window as any).oldScroll < window.scrollY && 50 < window.scrollY) {
      // down
      goToTopBtn.classList.remove("hide");
    } else {
      // up
      goToTopBtn.classList.add("hide");
    }
    (window as any).oldScroll = window.scrollY;
  }
});