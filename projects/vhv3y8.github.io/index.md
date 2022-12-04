앞으로 만들 서비스/프로그램/작품들을 모아두고 간단한 소개를 적을 공간으로 만들게 되었다.

아이디어는 [박성범](https://github.com/parksb)님의 [블로그](https://parksb.github.io/)와 [handmade-blog](https://github.com/parksb/handmade-blog)라는 깃허브 레포지토리를 보다가 얻었는데, 보면서 ejs라는 게 있고 템플릿용으로 쓸 수 있다는 걸 알게 되었고, 비슷한 방식으로 만들었다.

---

빌드는 로컬에서 scss, 타입스크립트, ejs, 마크다운 등등을 모두 빌드한 뒤에 그대로 푸시하면 완성된다.

작성은 프로젝트 정보와 소개글 두 가지를 할 수 있다.

```
{
  "name": "vhv3y8.github.io",
  "description": "json 파일에 작성해서 빌드하는 형식으로 만든 프로젝트 모음 블로그",
  "tags": [
    "웹페이지"
  ],
  "startDate": "2022-04-30T15:00:00.000Z",
  "devMonths": [
    "2022.11"
  ],
  "website": {
    "link": "https://vhv3y8.github.io/"
  },
  "links": {
    "github": "https://github.com/vhv3y8/vhv3y8.github.io"
  }
}
```

프로젝트 정보는 이런 식으로 작성하고, 소개글은 마크다운 파일로 작성한다.

마크다운 변환은 [showdown](https://github.com/showdownjs/showdown) 라이브러리로 했고, 동시에 ejs 템플릿에 적용시키면서 node의 fs를 이용해 index.html 파일을 바로 생성하는 방식으로 빌드 스크립트를 짰다.