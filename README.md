## 진행 기간: 2023.07.16 ~ 2023.07.19

![화면화면](https://github.com/yoojiih/clinical-trial-search-bar/assets/33574807/320c3697-68f4-484d-a830-384e6118748d) <br/>

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

## ⚙️ 실행 방법

**설치 및 실행**

```
$ npm install
$ npm start
```

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

## API 호출별로 로컬 캐싱 구현

- API 호출 시 Cache Storage에 데이터가 존재한다면 다시 호출을 하지 않고 캐싱된 데이터를 사용하도록 구현완료
- expire time은 5분으로 설정

## 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- useDebounce hook을 통해 사용자가 검색어 입력 후 0.5초동안 입력이 없을 경우에만 API 호출되도록 하여 입력마다 API 호출하지 않도록 구현

## 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- SearchInput에서 onKeyDown 이벤트가 발생했을 때 event.key 값이 ArrowDown, ArrowUp일 경우 selectedIndex가 변경되게 구현
- RecommendationListItem의 index와 selectedIndex가 같을 때 background-color를 변경시켜 어떤 아이템이 선택되었는지 명확하게 알 수 있도록 구현
