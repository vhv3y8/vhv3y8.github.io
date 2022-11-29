// more 태그 리스트로 history api 이용해서 구현
import "./events";
import "./ui/index";
import info from "../projects/info.json";
import { convertToLowerHyphen } from "./utils";
import { search } from "./search";

console.log("test.");

let projectList: {
  name: string,
  description: string,
  tags: string[],
  websiteUrl: string,
  path: object,
  pageUrl: string,
  firstPublishDate: string,
  lastPublishDate: string
}[] = info.infoArr;

export let projectNameList = projectList.map(obj => obj.name).map(convertToLowerHyphen);

export let projectSearchList: {
  name: string,
  tags: string[],
  searchString: string[]
}[] = projectList.map(obj => {
  return {
    name: obj.name,
    tags: obj.tags,
    // .map(convertToLowerHyphen),
    searchString: [obj.name, obj.description, obj.websiteUrl]
  };
});

export let tagList: Set<string> = new Set();
projectList.forEach(obj => {
  obj.tags.forEach(tag => {
    tagList.add(tag);
  });
});

console.log(projectList);
console.log(projectNameList);
console.log(projectSearchList);
console.log(tagList);

// init ui
search();