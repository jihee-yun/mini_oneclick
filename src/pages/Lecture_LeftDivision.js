import React from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { useState, useEffect } from "react";
import Slider from "../utils/Slider";
import ReviewWrite from "./Lecture_LeftDivision_ReviewWrite";
import ReviewList from "./Lecture_LeftDivision_ReviewList";

const ClassMenu = styled.div`
  width: 65%;
  margin-bottom: 10px;
  position: relative;
  .menu {
    display: flex;
    flex-direction: row;
  }
  .menutree { 
    margin: 5px;
    padding: 10px;
    height: 100%;
    display:flex;
    align-items: center;
    font-weight: bold;
    border-bottom: 3px solid white;
    opacity: .3;
    cursor: pointer;
  }
  // 메뉴 클릭시 활성화 된 메뉴는 표시, 나머지는 반투명으로 표시
  .select {
    border-bottom: 3px solid black;
    opacity: 1;
    z-index: 1;
  }
  .nosel {
    border-bottom: 3px solid white;
    opacity: .3;
    z-index: 5;
  }
`
// 왼쪽 메뉴 스타일
const Division1 = styled.div`
  width: 70%;
  box-shadow: 1px 1px 1px 1px lightgray;
  margin-right: 10px;
  .descSel {
    width: 100%;
    z-index: 5;
  }
  .descNoSel {
    width: 110%;
    color: red;
    position: absolute;
    top: 20px;
    z-index: -1;
    opacity: 0;
  }
`

const ClassDescTitle = styled.div`
  padding: 5px;
  /* display: flex; */
  margin: 20px 0;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1.5rem;
`;

const Introduction = styled.div`
  width: 280px;  
  margin: 0;
  display: inline;
  /* flex-wrap: wrap; */
  /* flex-direction: column; */
  list-style: none;

  img {
    width: 45%;
  }
  li {
    display: flex;
    margin-bottom: 15px;
  }
  li > p {
    display:flex;
    width: 100%;
    padding: 20px;
    align-items: center;
    word-break: break-all;
  }
`

const ClassDetailTitle = styled.div`
  span {
    color: blue;
  }
`

const ClassDetail = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

// 크리에이터 div 페이지

const Contain = styled.div`
  width: 90%;
  margin: 10px auto;
`
const ClassCreatorDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  line-height: 1.4em;
  img {
    width: 50%;
    border-radius: 50%;
  }
  padding-bottom: 0;
`
const ClassCreator = styled.div`
  display: flex;
  box-sizing:border;
  padding: 20px;
  img {
    width: 24px;
    margin: 0 2px;
  }
    li {
    display:flex;
    font-weight:bold;
    color:lightgray;
  }
  border-bottom: 1px solid lightgray;
  padding-top: 0;
`
const CreatorIntro = styled.div`
  display:flex;
  flex-wrap:column;
  justify-content: center;
`

// 클래스 후기 div
const ReviewTitle = styled.div`
  border: 1px solid black;
`


const LeftDivision = () => {
  // 메뉴 선택 시 보여지는 정보를 변경하기 위한 함수
  const [menuSel, setMenuSel] = useState(1);
  const [DescSel, setDescSel] = useState(1);
  const MenuIndex = (count) => {
    setMenuSel(count);
    setDescSel(count);
  }

  const [list, setList] = useState("");

  useEffect(() => {
    const LectureList = async() => {
      const rsp = await AxiosApi.viewLecture(1);
      if(rsp.status === 200) setList(rsp.data);
    }
    LectureList();
  }, []);
  
  return (
    <Division1>
      {list && list.map(Lecturelist => (
      <div key={Lecturelist.id}>
        <ClassMenu>
          <div className="menu menu1">
            <div className={`menutree ${menuSel === 1 ? `select` : 'nosel'}`} onClick={()=>{MenuIndex(1)}}>클래스 소개</div>
            <div className={`menutree ${menuSel === 2 ? `select` : 'nosel'}`} onClick={()=>{MenuIndex(2)}}>크리에이터</div>
            <div className={`menutree ${menuSel === 3 ? `select` : 'nosel'}`} onClick={()=>{MenuIndex(3)}}>후기</div>
          </div>
        </ClassMenu>
        <div className={`${DescSel === 1 ? `descSel` : `descNoSel`}`}>
        <Contain>
          {/* 메뉴 버튼 시 z-index 변경 */}   
          <ClassDescTitle>  {/* 클래스 소개 */}
            이런 걸 배울 거예요.
          </ClassDescTitle>
          <Introduction> 
            <Slider></Slider> {/* 슬라이더 */}
          </Introduction>
          <ClassDetailTitle>
            <h3><span>초급자</span>분들을 위한 <span>일식 요리, 오마카세</span> 클래스 입니다.</h3>
          </ClassDetailTitle>
          <ClassDetail>
            자세한 강의 설명은 여기로dddddddddddddddddddddddd
          </ClassDetail>
        </Contain>
      </div>
      <div className={`${DescSel === 2 ? `descSel` : `descNoSel`}`}> {/* 크리에이터 소개 */}
        <Contain>
          <ClassCreatorDesc>
            <div>
              크리에이터<br/>
              <b>{Lecturelist.lecturer}</b> 입니다.
            </div>
            <div>
              <img src="https://cdn.class101.net/images/1dfa3159-518b-43f7-9647-6dc8f53de06d/2048xauto.webp" alt="" />
            </div>
          </ClassCreatorDesc>
          <ClassCreator>
              <li><img src="https://class101.net/images/ic-youtube.png" alt="" />YouTube</li>
              <li><img src="https://class101.net/images/ic-instagram.png" alt="" />Instagram</li>
          </ClassCreator>
          <CreatorIntro>
              강사 설명 들어가는 곳
          </CreatorIntro>
        </Contain>
      </div>    
      <div className={`${DescSel === 3 ? `descSel` : `descNoSel`}`}>  {/* 후기 */}
        <Contain>
          <ReviewWrite></ReviewWrite>
          <ReviewTitle>
            실제로 클래스를 진행한 수강생들의 생생한 후기 `50`개가 있어요.
          </ReviewTitle>
          <div className="reviewlist">
          <ReviewList></ReviewList> 
          <ReviewList></ReviewList> 
          </div>
          <div>
            <button>이전 후기 보기</button>
            <button>다음 후기 보기</button>
          </div>
        </Contain>
      </div>
    </div>
    ))}
  </Division1>
  )
}

export default LeftDivision;