// JsxTest2.jsx

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function JsxTest2() {

  // 1. 삼항연산자 
  //  - if문을 짧게 쓰기 위해서 사용하는 기호다!
  //  - ?

  // -1. 로그인 중인지 아닌지 구별하는 방법 

  let isLogin = false;

  // -2. 시간을 변경하는 방법
  let hour = 13;

  // -3. true일 경우에는 Header 컴포넌트를 보이고
  //     false 일 경우에는 Footer 컴포넌트를 보인다.
  let isHeader = true;

  return (
    <div>
        <h3>jsx의 새로운 문법!</h3>
        <p> 기본적으로 return () 안에는 HTML태그만 작성가능하다</p>
        <p>자바스크립트 코드를 작성해야될 때가 있다.</p>

        {/*  조건에 따라서 컴포넌트도 변경할 수 있다. */}

        {
            isHeader ? <Header/> : <Footer/>
        }


        {
            // 중괄호를 이용해서 자바스크립트 코드를 같이 사용할 수있다.
            isLogin ? <h2>로그인 성공!</h2> : <h2>로그인 필요</h2>
          
            //안에 내용 content 도 쉽게 바꿀 수있음
        }
        <h3>{ hour < 12 ? "☀️ 오전이에요!" : "🌙 오후네요!" }</h3>


    </div>
  )
}