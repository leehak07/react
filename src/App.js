import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // ㄷㄷ 얘도 컴포넌트임!!ㄷㄷ!!!!!;;;;;;;
  let post = '제목'; //안쓰는거..
  // document.querySelector('h4').innerHTML = post;
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
  let [좋아요, ㅈㅇㅇ] = useState(0);

  // function 함수(){
  // }
  // () => {}
  // 함수 만드는 문법

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'yellow', fontSize:'16px'}}>블로그...는 아닌데..ㅠㅜㅠㅜ</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>제목 변경</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ㅈㅇㅇ(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
      {/* 컴포넌트 - 반복적 html 축약, 큰 페이지들, 자주 변경되는 것들에 쓰기 */}
      {/* state 가져다 쓸 때 문제가 생김 */}
      {/*  = A 함수에서 만든 변수는 B 함수에서 가져다 쓸 수 없다 */}
      {/* <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}

    </div>
  );
}

// let Modal = () => {
//   return (
//     <div></div>
//   )
// }
// 컴포넌트 만드는 방법 2

function Modal(){
  return (
  <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      )
}

export default App;
