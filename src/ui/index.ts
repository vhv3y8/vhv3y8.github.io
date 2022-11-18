// 클릭시 걸어주는 소소한 효과들 및 큰 기능 파일을 모으는 곳

function openPageModal(projectName: string): void {
  let curr = document.querySelector(`#modalContainer .${projectName}`);
}

function createProjectDiv(lowerHyphenName: string): HTMLDivElement {
  let elem = document.createElement("div");
  return elem;
}

export {
  openPageModal,
  createProjectDiv
}