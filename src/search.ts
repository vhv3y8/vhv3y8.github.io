type searchOption = {
  tags: string[],
  text: string
}
type searchPlace = "title" | "tag" | "info" | "link" | "period";
// import * as projectInfo from "../projects/info.json";

export let searchOption: searchOption = {
  tags: [],
  text: "",
};

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

export function clearSearchTags(): void {
  searchOption.tags = [];
}

export function setSearchText(text: string): void {
  searchOption.text = text;
}

export function search(searchOption: searchOption)
  : {
    projectName: string,
    where: Set<searchPlace>
  }[] {
  let sett: Set<searchPlace> = new Set();
  sett.add("info");
  return [{ projectName: "hi", where: sett }]
}