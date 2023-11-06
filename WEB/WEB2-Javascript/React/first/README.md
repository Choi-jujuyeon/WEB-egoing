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

#### event.preventDefault : event의 기본 동작을 방지해줌.

#### event.target : event를 유발시킨 태그를 가리킨다.

## State

#### Prop vs State

##### 공통점 : 값이 변경되면 새로운 return 값을 만들어 UI를 변경한다.

##### 차이점-prop : 컴포넌트를 사용하는 외부자를 위한 데이터이다.

##### 차이점-state : 컴포넌트를 만드는 내부자를 위한 데이터이다.

#### state 사용 목표 : 상태변경시 컴포넌트 함수가 새로 실행되어, 새로운 return 값으로 UI가 변경되도록 하자 !

#### 실습 순서

##### step 01. 상태를 담아주는 지역변수 mode ~> useState로 변경

##### ex) const [mode,setMode] = useState("Welcome")

##### step 02. 상태 변경이 필요한 경우 ~> setMode("READ")

##### step 03. 내가 어떤 번호의 Nav를 클릭했는지 상태체크~> id로 변경

## CREATE

#### 만들고자 하는 것 : 버튼 클릭시 title과 body 입력란에 내용을 입력에 목차를 추가할 수 있다.

### 상태 변경시 원시데이터 타입일 경우

#### const [value, setValue] = useState(PRIMITIVE); ~> ex) string, number, boolean ...

### 상태 변경시 범객체 타입일 경우

#### const [value,setValue] = useState(Object);

#### 복제 - newValue={...value}

#### 복제본 변경 - newValue 변경

#### 컴포넌트 리로딩 - setValue(newValue)

## UPDATE = CREATE + READ
