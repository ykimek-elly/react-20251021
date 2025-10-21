// 폴더명 components
//  파일명: Profile.jsx

//내가 직접 파일을 html코드를 만들 때는 함수를 이용해서 묶는다.
//1. 함수만들기
// 기존 html 코드랑 같이 현재 내 파일을 기준으로 가져온다.


import person from "../assets/people1.webp";
import "./Profile.css";
import "./Badge.css";
import Badge from "./Badge";

export default function Profile() {

    let name = "James Kim";
    let job = "프론트엔드 개발자";
  return (
    <div className="profile-box">
        <Badge/>
        <img src={person} alt="프론트엔드 개발자" />
        <h2>{name}</h2>
        <p>{job}</p>
    </div>
  )
}