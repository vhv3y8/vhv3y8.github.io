// import { applySearchUI } from "./ui/index";
import { search, toggleTag, setSearchText, getOption } from "./search"
import { convertToLowerHyphen } from "./utils";

let searchInput = document.querySelector("input#searchInput") as HTMLInputElement;
let goToTopBtn: HTMLButtonElement | null = document.querySelector("button#goToTop");
let openModalElements = document.querySelectorAll("button.openModal") as NodeListOf<HTMLElement>;

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
  openModalElements.forEach(button => {
    button.addEventListener("click", () => {
      history.pushState({
        projectName: button.dataset.projectname
      }, "", `?projectname=${button.dataset.projectname}`);
      console.log("hello from more element click event");
      (document.querySelector("main") as HTMLElement).classList.add("none");
      (document.getElementById("modalContainer") as HTMLElement).classList.remove("none");
      document.querySelector(`#modalContainer article.${button.dataset.projectname}`)?.classList.remove("none");
    });
  });

  // click event for modal close button
  document.querySelector("button#testt")?.addEventListener("click", () => {
    history.back();
  });
});

window.addEventListener("popstate", (e: PopStateEvent) => {
  console.log({
    msg: "pop state event called.",
    state: e.state
  });
})

window.addEventListener("scroll", (e) => {
  if (goToTopBtn !== null) {
    if ((window as any).oldScroll > window.scrollY && 50 < window.scrollY) {
      // up
      goToTopBtn.classList.remove("hide");
    } else {
      // down
      goToTopBtn.classList.add("hide");
    }
    (window as any).oldScroll = window.scrollY;
  }
});