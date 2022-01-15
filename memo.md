# react200 memo

## 생명주기
### component의 생성, 변경, 소멸 과정

#### 생성 : render(), constructor(), getDerivedStateFromProps(), componentDidMount()
- render : 화면 내용이 변경돼야 할 시점에 자동으로 호출
- constructor(props) : 생명주기 함수 중 가장 먼저 실행되고 처음 한 번만 호출.
- getDerivedStateFromProps : constructor 함수 다음으로 실행되고, 컴포넌트가 새로운 props를 받게 됐을 떄 state를 변경해줌.
- componentDidMount : 화면이 모두 그려진 후 가장 마지막으로 실행된다. 이벤트 처리, 초기화 등 가장 많이 활용됨.

#### 변경 : shouldComponentUpdate()
- props나 state의 변경을 말함

## ES5 vs ES6
### ES5 (2011~)
   - 객체 2개를 합치기 위해서는 Object.assign()을 사용해야 함.
  ```javascript
  Object.assign({}, varObj1, varObj2)
  ```
  - 객체를 구현하기 위해 prototype 사용
  - 콜백함수 내부에서 this는 window 객체이기 때문에 this로 state 변수에 접근하면 undefined 에러가 발생함. => 콜백 함수 밖으로 this를 bind 해준다.
  ```javascript
    setTimeout(
        function () {
            console.log("4. Es5 Callback Function Bind : " + this.state.arrowFuc);
        }.bind(this),
        100
    );
  ```
  
### ES6 (2015~)
- String
    - startWith() :  앞에서부터 일치하는 문자열이 있는지
    - endsWith() : 뒤에서부터 일치하는 문자열이 있는지
    - includes() : 위치에 상관없이 특정 문자열이 포함되어 있는지
     - 조건에 부합하면 true 아니면 false를 반환
- 전개연산자(...)
    - 전개 연산자 ...(마침표 3개)를 배열명 앞에 붙여 여러 개의 배열을 합칠 수 있음.
- Arrow Function(화살표함수)에서는 this를 bind 해주지 않아도 this를 컴포넌트로 사용해 state 변수에 접근할 수 있음.
- map()은 forEach()와 달리 return 을 사용해 반환 값을 받을 수 있다.

## 리액트에서 jquery사용하기
    - npm install jquery
    - 상단에 import $ from 'jquery'; 선언

## props
- 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용한다.
- props를 전달받은 자식 컴포넌트에서는 데이터를 수정할 수 없다.

## class형 컴포넌트
- Component와 PureComponent가 있다.
- PureComponent에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다. => 불필요한 render함수 실행을 줄일 수 있음.

### shallow-equal 패키지
- PureComponent에서 state값의 변경을 비교하는 것과 동일한 기능을 하는 함수를 제공.
- shallowEqualArrays() : 문자열과 배열은 값만 비교, 객체는 PureComponent와 동일하게 참조값(메모리 주소) 비교

## 함수형 컴포넌트
- 클래스형 컴포넌트와 달리 state가 없고 생명주기 함수를 사용할 수없다.
- 상위 컴포넌트에서 props와 context를 파라미터로 전달받아 사용하고, render() 함수가 없으므로 return만 사용해 화면을 그린다.

## hook
- 대표적인 hook 함수 : useState(), useEffect()
- useEffect() : componentDidMount()와 같이 return되는 html코드들이 화면에 그려진 이후에 실행됨.

## Fragments
- Fragment 는 약식으로도 사용 가능함.
```javascript
    // Fragment
     <React.Fragment>
        <p>P TAG</p>
        <span>SPAN TAG</span>
      </React.Fragment>
    // 약식버전
    <>
        <p>P TAG</p>
        <span>SPAN TAG</span>
    </>
```

### (참고)책 챕터 34 ~ 55는 reactstrap에 관한 내용

## 동기와 비동기
- 동기는 요청과 결과가 동시에 일어난다는 뜻
- 비동기는 요청과 결과의 작업 처리 단위를 맞추지 않는다는 뜻

## 프로미스(Promise)
- 비동기 함수를 동기적으로 사용할 수 있도록 하는 개념
- 프로미스 함수 중 then은 이전함수가 완전히 완료됐을 때 실행됨.

## fetch 
- 웹에서는 클라이언트와 서버가 http 프로토콜을 통해 요청과 응답을 주고 받음.
- GET : 데이터를 조회해 가져와 사용(데이터 조회나 검색에 사용)
  - http://example.com?a=1&b=2 와 같이 url? 뒤에 파라미터명=값 형태로 필요한 데이터를 전달.
- POST : 서버의 상태나 데이터를 변경하는 등 수행 작업에 사용
  - http body에 데이터를 넣어 전달하는데, url 뒤에 파라미터를 표시하지않고 사용할 수 있음
```javascript
    const response = await fetch('http://date.jsontest.com/', {
      // post 호출에 대한 정보
      method: 'POST',
      // 어떤 형태의 데이터를 사용할지 지정하는데 이때 Content-Type이라는 변수를 사용
      headers: {
      'Content-Type': 'application/json',
      },
      // http body에 json형태의 데이터를 담아 전송
      body: { a:"react", b:200 },
    });
```
## axios
  - npm install -save axios
```javascript
    axios.get("http://date.jsontest.com/").then((response) => {
        // 반환된 response와 호출된 변수명 사이에 data를 붙이면 변수를 사용할 수 있음
        console.log(response.data.date);
    });
    // axios.post('호출 url', json 데이터)
    // json 데이터는 {key1 : value1, key2 : value2} 형태
    axios.post('http://date.jsontest.com/', {
      a:"react", b:200
    })
    .then( response => {alert(response.data.date)})
```

## Promise
- promise에는 대기, 이행, 거부의 개념이 있다.
- 대기 상태에서 이행 상태로 변할 때 then() 함수 안의 코드가 실행된다.
- promise then 함수를 사용하면 코드를 콜백 함수의 계단식 복잡한 코드 형태보다 가독성 있게 구현할 수 있다.
- 거부 상태가 됐을 때 catch 함수를 실행한다.(Promise에 에러가 발생해 이행으로 상태 변화를 하지 못하는 경우)
```javascript
    // 첫번째 함수(resolve)는 이행 함수
    // 두번쨰 함수(reject)는 거부 함수
    new Promise((resolve, reject) => {
      reject(Error("ERROR Info"));
    })
    .then(result => console.log("then "+result))
    .catch(result => console.log("catch : "+result));
```

## Event
### onClick
 : 특정 element가 클릭됐을 때 정의된 함수를 호춣하는 방식
### onChange
 : 특정 element에 변화가 생겼을 때 정의된 함수를 호출하는 방식
### onMouseMove
 : 특정 tag 영역 안에서 마우스 커서가 움직일 때 발생
### onMouseOver
 : 특정 tag 영역에 마우스 커서가 진입할 때 발생
### onMouseOut
 : 특정 tag 영역에 마우스 커서가 진입했다가 벗어날 때 발생
### onKeyDown, onKeyPress
 : 키를 눌렀을 때 동작
### onKeyUp
 : 키를 눌렀다가손을 뗐을 때 동작

#### onKeyDown과 onKeyUp : 동작자체를 인식(한영, 프린트스크린키 인식X)
#### onKeyPress : 문자가 실제로 입력됐을 떄 반응(컨트롤,쉬프트,알트,F1-F9,스크롤락,포즈,엔터,한영,프린트스크린키 인식X)

### onSubmit
 : form 태그 안에 있는 type이 submit인 input 태그를 클릭하거나 input 태그에 커서를 놓고 Enter를 누르면 onSubmit 이벤트가 발생


## Ref (reference) : 참조
- react에서 element의 값을 얻거나 수정할 때 보통 js나 jquery를 사용한다.
- 이때 id나 class 같은 속성으로 element에 접근한다.
- Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다.  
**참조에 대한 정보가 ref.current 속성에 할당됨**

## 커링(Currying)함수 : 함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수
- 함수를 하나만 사용할 때는 필요한 모든 파라미터를 한 번에 넣어야 한다. 컬링을 사용하면 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있다.

## 고차 컴포넌트 (HOC, Higher-Order Component) : 컴포넌트를 인자로 받거나 반환하는 함수
- 여러 컴포넌트에 동일하게 적용돼야 하는 공통 기능을 코드 중복 없이 사용할 수 있다.

## 컨텍스트 api
- props를 사용하면 데이터를 부모 컴포넌트에서 자식 컴포넌트로 전송할 수 있다.
- 손자컴포넌트가 데이터를 필요로 하는데 자식컴포넌트는 부모 컴포넌트의 데이터가 필요하지 않은 상황에서 컨텍스트는 데이터의 공급자와 소비자를 정의하고 데이터가 필요한 컴포넌트만 사용할 수 있게 구현.
- 하위 컴포넌트가 여러 개인 구조에서 유용하게 사용
- 몇 번째 하위 컴포넌트인지와는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용

## 컨텍스트로 부모 데이터 변경하기 => 77번 예제가 이상함
- props는 데이터가 부모에서 자식 컴포넌트로 단방향으로만 이동가능
- 컨텍스트를 사용하면 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경할 수 있음

## redux
- redux는 데이터를 스토어 -> 컴포넌트 -> 액션 -> 리듀서 -> 다시 스토어 의 과정을 통해 변경한다.
- reducer : 데이터 초깃값을 설정하고 데이터를 변경해주는 함수

## react-redux
- store를 하위 컴포넌트에 매번 상속하지 않고 사용할 수 있다.
- 스토어 데이터를 사용, 변경하는 코드를 모듈화해 컴포넌트 내에 중복된 코드 사용을 최소화할 수 있다.
- redux와 과정은 동일하지만 스토어 -> 컴포넌트, 컴포넌트 -> 액션 단계에서 connect라는 react-redux 패키지 함수가 사용된다.

## 쿠키
- 사용자가 접속한 웹 사이트의 서버를 통해 사용자 컴퓨터에 설치되는 정보를 말한다. 사용자 정보를 저장하거나 마케팅을 위한 목적으로 사용될 수 있다.
```javascript
    cookie.save('userid', "react200"
        , {
          // 쿠키값을 저장하는서버 경로
          // path가 /react 라면 해당 경로에서만 확인가능하고 /라면 모든 페이지에서 쿠키에 접근가능
            path: '/',
            // 쿠키 유효시간
            expires,
            // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키가 저장
            // secure: true,
            // 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션
            // httpOnly: true
        }
    );
```

## img tag
- require을 사용하면 상대경로 사용가능
```javascript
  <img src={require("../img/main/log_img.png")} alt="" />
```

### (참고) 책 194 카카오맵 커스텀 오버레이로 표시하기