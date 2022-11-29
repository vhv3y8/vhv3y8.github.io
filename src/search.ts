import { projectNameList, projectSearchList } from "./index";
import { applySearchListUI, applySearchOptionTextUI } from "./ui/searchUI";
import { convertToLowerHyphen } from "./utils";

export type searchOption = {
  tags: string[],
  text: string
}
type searchPlace = "title" | "tag" | "info" | "link" | "period";
// import * as projectInfo from "../projects/info.json";
export type searchResult = {
  projectName: string,
  where?: Set<searchPlace>
}

export let currentOption: searchOption = {
  tags: [],
  text: "",
};

export function initSearchOption(option: searchOption): void {
  currentOption = option;
}

export function clearSearchTags(): void {
  currentOption.tags = [];
}

export function setSearchText(text: string): void {
  currentOption.text = text;
}

export function addSearchTag(tag: string): void {
  if (!currentOption.tags.includes(tag)) {
    currentOption.tags.push(tag);
  }
}

export function removeSearchTag(tag: string): void {
  if (currentOption.tags.includes(tag)) {
    currentOption.tags = currentOption.tags.filter(str => str !== tag);
  }
}

export function toggleTag(tag: string): void {
  if (currentOption.tags.includes(tag)) {
    currentOption.tags = currentOption.tags.filter(str => str !== tag);
  } else {
    currentOption.tags.push(tag);
  }
}

function apply(option: searchOption = currentOption)
  : searchResult[] {

  // search and get result
  return projectSearchList
    .filter(projectObj => {
      // tags OR
      if (option.tags.length > 0 && option.tags.every(tag => !projectObj.tags.includes(tag))) {
        console.log({
          projectObj,
          reason: "tags OR"
        });
        return false;
      }
      // AND text
      if (projectObj.searchString.some(str => str.includes(option.text))) {
        return true;
      } else {
        console.log({
          projectObj,
          reason: "AND text"
        });
        return false;
      }
    })
    .map(projectObj => {
      // change to searchResult format
      return {
        projectName: projectObj.name
      }
    });
}

export function getOption(): searchOption {
  // function for testing
  return currentOption;
}

export function search(): void {
  if (currentOption.tags.length == 0 && currentOption.text == "") {
    applySearchListUI("all");
    applySearchOptionTextUI("all", projectNameList.length);
  } else {
    let result = apply();
    console.log({ msg: "result is", result });
    applySearchListUI(result);
    applySearchOptionTextUI(currentOption, result.length);
  }
}