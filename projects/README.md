## projects

- **프로젝트 폴더 이름은 반드시 `(info.json에 있는 name).toLowerCase().split(" ").join("-")` 포맷이어야 함**

- 설명 페이지에 들어갈 마크다운 파일 이름은 반드시 `index.md`이어야 함

- 이미지 경로는 절대경로로 써야 함

- `htmlString.json` 빌드는 `tools/build.js` 실행 (`npm run build:md`)