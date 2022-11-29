import { searchOption, searchResult } from "../search";
import { convertToLowerHyphen } from "../utils";

export function applySearchListUI(searchResultList: searchResult[] | "all"): void {
  // init
  let allArticles = document.querySelectorAll("section#list article");
  console.log(`all articles: ${allArticles}`);

  // hide / show
  if (searchResultList === "all") {
    allArticles.forEach(article => article.classList.remove("none"));
  } else {
    allArticles.forEach(article => { article.classList.add("none") });
    // TODO: loading effect?
    let resultNameList = searchResultList.map(res => res.projectName);
    resultNameList.forEach(projectName => {
      (document.querySelector("section#list") as HTMLElement).getElementsByClassName(convertToLowerHyphen(projectName))[0].classList.remove("none");
    });
  }
}

export function applySearchOptionTextUI(option: searchOption | "all", count: number): void {
  // apply search result count ui
  let searchOptionSpan = document.querySelector("span#searchOption");
  let searchCountSpan = document.querySelector("span#count");

  // generate search option text
  let searchOptionText;
  if (option === "all") {
    searchOptionText = "All";
  } else {
    if (option.tags.length === 0) {
      searchOptionText = `"${option.text}"`;
    } else {
      searchOptionText = `${(option.text === "") ? "" : `"${option.text}", `} ${option.tags.join(" or ")}`;
    }
  }

  if (searchOptionSpan !== null) {
    searchOptionSpan.textContent = searchOptionText;
  }
  if (searchCountSpan !== null) {
    searchCountSpan.textContent = count + "";
  }
}