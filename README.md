## 진행 기간: 2023.07.16 ~ 2023.07.19

</div>

<br/>

## 목차

- [🔗 배포 링크](#-배포-링크)
- [⚙️ 실행 방법](#️-실행-방법)
- [📂 폴더 구조](#-폴더-구조)
- [🛠️ 기술 스택](#️-기술-스택)
- [📖 서비스 소개](#-서비스-소개)
  - [기능 구현](#기능-구현)
  - [페이지](#페이지)
- [👑 Best Practice](#-best-practice)

<br/>

## 🔗 배포 링크

[배포사이트 바로가기](https://pre-onboarding-11th-3-1.vercel.app/)

<br/>

## ⚙️ 실행 방법

**설치 및 실행**

```
$ npm install
$ npm start
```

<br/>

## 🤝 팀 규칙

### 브랜치 전략

- upstream에는 main 브랜치만 존재
- 브랜치명: `feature/#이슈번호-간단한설명`
  - ex: `feature/#7-setting`
- fork 해서 브랜치파서 작업한뒤 `upstream:main`으로 PR 날림
- 코드리뷰 받고 승인 받으면 `upstream:main`에 merge

<br/>

## 📂 폴더 구조

```
📦src
  ├── 📄index.css
  ├── 📄index.tsx
  ├── 📄App.tsx
  ├── 📂apis
  ├── 📂components
  ├── 📂hooks
  ├── 📂images
  └── 📂utils
```

<br/>

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-000000?style=for-the-badge&logo=husky&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

<br/>

## 📖 서비스 소개

질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

### 기능 구현

- 검색창 구현
- 검색어 추천 기능 구현
- 캐싱 기능 구현

<br/>

### 페이지

<br/>

## 👑 캐싱 (Cache Storage)
