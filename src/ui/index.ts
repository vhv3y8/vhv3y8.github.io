import { search, searchResult, toggleTag } from "../search";
import { tagCountList } from "../index";
import { convertToLowerHyphen } from "../utils";

// 클릭시 걸어주는 소소한 효과들 및 큰 기능 파일을 모으는 곳

export function openModal(projectName: string): void {
  let curr = document.querySelector(`#modalContainer .${projectName}`) as HTMLElement;
  curr.classList.remove("none");
}

export function createProjectDiv(lowerHyphenName: string): HTMLDivElement {
  let elem = document.createElement("div");
  return elem;
}

function createTagLiElement(name: string, count: number, color?: string): HTMLLIElement {
  let elem = document.createElement("li");
  let selected: "true" | "false" = "false";
  elem.classList.add("searchTag");
  elem.dataset.color = color;
  elem.dataset.selected = selected;

  // add title span
  let titleSpan = document.createElement("span");
  titleSpan.classList.add("name");
  titleSpan.textContent = name;
  elem.appendChild(titleSpan);

  // count span
  let countSpan = document.createElement("span");
  countSpan.classList.add("count");
  countSpan.textContent = count + "";
  elem.appendChild(countSpan);

  elem.addEventListener("click", () => {
    if (selected === "false") {
      selected = "true";
      elem.style.backgroundColor = "#ffa700";
    } else {
      elem.style.backgroundColor = "#d9d9d9";
      selected = "false";
    }

    toggleTag(name);
    search();
  });

  return elem;
}

window.addEventListener("load", () => {
  // create and add tags li element to ul
  let tagsContainer = document.querySelector("ul#tags") as HTMLUListElement;
  Object.keys(tagCountList).forEach(tag => {
    tagsContainer.appendChild(createTagLiElement(tag, tagCountList[tag]));
  });
})