function openPageModal(projectName: string): void {

}

function convertToLowerHyphen(name: string): string {
  return name.toLowerCase().split(" ").join("-");
}

function createProjectDiv(lowerHyphenName: string): HTMLDivElement {
  let elem = document.createElement("div");
  return elem;
}

export {
  openPageModal,
  convertToLowerHyphen
}