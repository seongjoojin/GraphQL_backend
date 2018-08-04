# GraphQL_backend
GraphQL으로 영화API 만들기

## GraphQL로 해결가능한 것
- Over-fetching : 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것
- Under-fetching : 하나를 완성하려고 많은 소스를 요청하는 것

## 초기 설정

yarn global add nodemon
: 파일 변경을 감지하여서 서버 재 구동시킴

yarn global add babel-cli
: 최신 자바스크립트를 쓰기 위한 도구

##### package.json에 추가

```js
"script": {
    "start":"nodemon --exec babel-node index.js"
}
```

##### babel 환경성정

```js
{
    "presets":["env","stage-3"]
}
```

babel 라이브러리 설치

```js
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```

## GraphQL 정의 된 세 종류의 형식

- Query
- Mutation
- Subscription