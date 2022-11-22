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

export let searchOption: searchOption = {
  tags: [],
  text: "",
};

export function initSearchOption(option: searchOption): void {
  searchOption = option;
}

export function clearSearchTags(): void {
  searchOption.tags = [];
}

export function setSearchText(text: string): void {
  searchOption.text = text;
}

export function addSearchTag(tag: string): void {
  if (!searchOption.tags.includes(tag)) {
    searchOption.tags.push(tag);
  }
}

export function removeSearchTag(tag: string): void {
  if (searchOption.tags.includes(tag)) {
    searchOption.tags = searchOption.tags.filter(str => str !== tag);
  }
}

export function toggleTag(tag: string): void {
  if (searchOption.tags.includes(tag)) {
    searchOption.tags = searchOption.tags.filter(str => str !== tag);
  } else {
    searchOption.tags.push(tag);
  }
}

export function search(option?: searchOption)
  : Array<searchResult> {
  if (option !== undefined) {

  } else {

  }
  // get project datas

  // search and get result
  let result: Array<searchResult> = [{
    projectName: "vhv3y8.github.io"
  }];

  return result;
}

export function getOption(): searchOption {
  // function for testing
  return searchOption;
}