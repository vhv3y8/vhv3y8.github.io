## vhv3y8.github.io

### 작성 및 수정

- html : `src/index.ejs`

- css : `src/scss/*.scss`

- ts : `src/*.ts`

- project info : `projects/info.json`

### ejs lint

```bash
npm run lint
```

### 빌드

#### SCSS

```bash
npm run build:scss
```
entry: `src/scss/style.scss` -> `style.css`

#### EJS

```bash
npm run build:ejs
```
apply `projects/info.json` -> `index.html`

#### TypeScript

```bash
npm run build:ts
```
entry: `src/index.ts` -> `bundled.js`

#### markdown

```bash
npm run build:md
```
`projects/PROJECT_NAME/index.md` -> `projects/htmlString.json`

#### 전체

```bash
npm run build
```
