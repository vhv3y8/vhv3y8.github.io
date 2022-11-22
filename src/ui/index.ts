import { searchResult, getOption } from "../search";

// 클릭시 걸어주는 소소한 효과들 및 큰 기능 파일을 모으는 곳

export function openPageModal(projectName: string): void {
  let curr = document.querySelector(`#modalContainer .${projectName}`);
}

export function createProjectDiv(lowerHyphenName: string): HTMLDivElement {
  let elem = document.createElement("div");
  return elem;
}

export function applySearchUI(searchResults: Array<searchResult>): void {
  // init
  let allArticles = document.querySelectorAll("section#list article");
  console.log(`all articles: ${allArticles}`);

  // hide / show
  allArticles.forEach(article => { article.classList.add("hide") });
  // TODO: loading effect?
  searchResults.map(res => res.projectName).forEach(projectName => {
    document.querySelector(`article.${projectName}`)?.classList.remove("hide");
  });

  // apply search result count ui
  let searchOptionSpan = document.querySelector("span#searchOption");
  let searchCountSpan = document.querySelector("span#count");

  // generate search option text
  let searchOption = getOption();
  let searchOptionText;
  if (searchOption.tags.length === 0) {
    searchOptionText = searchOption.text;
  } else {
    searchOptionText = `"${searchOption.text}" & [${searchOption.tags.join(", ")}] :`;
  }

  if (searchOptionSpan !== null) {
    searchOptionSpan.textContent = searchOptionText;
  }
  if (searchCountSpan !== null) {
    searchCountSpan.textContent = searchResults.length + "";
  }
}
