# Start - NEXT

## 설치 및 실행

#### 설치(js) ~> npx create-next-app@latest

#### 실행 ~> npm run dev

## 배포

#### 빌드 ~> npm run build

#### 실행 ~> npm run start

#### .next 폴더에 배포판 생성됌 - 리소스 효율적 관리 가능

## 뼈대 만들기

#### layout.js ~> 공통적인 내용 구성하기

## Routing

#### http://domain/path(segment/segment/)

## Single page Application

#### Server Side Rendering(SSR) 효율적 + 최적화가능

## 정적 자원 사용하기

#### 저장위치 ~> public 폴더 사용

## backend(json-server)

#### npx json-server --port 9999 --watch db.json

#### http://localhost:9999/(내가 생성한 data 배열명)

#### 네트워크(response) + 콘솔창 띄우고 실습 진행

```

fetch('http://localhost:9999/topics').then((resp)=>{
    return resp.json();
}).then(result=>{
    console.log(result)
});

```

## 글 목록 가져오기

### ServerComponent vs Client Component

#### 서로 사용할 수 있는 api가 다르다

#### 사용자와 상호작용 할 경우 == ClientComp

#### 정보를 단순히 보여주는 역할을 할 경우 == ServerComp

#### fetch('주소').then(resp).then()

### ServerComponent-장점

#### client로 js를 전송하지 않아 용량이 적다.
