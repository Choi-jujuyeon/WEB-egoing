# REACT

## 설치

#### npx create-react-app <설치할 디렉토리명>

#### 실행 명령어 npm run start

## 수정

#### index.js ~> 여러가지 전역적인 설정이 들어가 있음

#### App.js ~> UI 설정하는 부분

#### App.css ~> App.js의 스타일 부분

## 배포

#### build 명령어 : npm run build ~> build 폴더가 생성됌. - index.html가 생성된다.

#### index.html을 서비스하는 웹 서비스 실행 명령어 : npx serve -s build

## 컴포넌트 (= 사용자 정의 태그)

#### 실습 진행과 다르게 컴포넌트 파일을 따로 생성함.

## PROP

#### {중괄호 안에 있는 문자는 문자열이 아닌 표현식으로 취급된다}

#### data : 객체로 관리

---

#### Nav Component

##### step 01. data(id, title, body) 를 topics 객체로 저장

##### step 02. Nav 컴포넌트에 props로 topic 객체 전체 내려주기 (data를 내려주는 것)

##### step 03. 빈 배열 선언 ~> const lis = [];

##### step 03.반복문을 사용해 topics의 순서 항목을 변수 t에 저장

##### step 04. topics의 i번지의 원하는 데이터를 추출해 빈배열에 저장해준다.

##### step 05. 값이 저장된 배열을 마지막에 호출해준다

## 이벤트

#### bui
