import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import StyledButton from "../utils/StyledButton"
import like_icon from "../images/like_icon.png"
import heart_icon from "../images/heart_icon.png"
import Slider from "../utils/Slider";
import NaverMap from "../utils/NaverMap";



const BodyContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
`

// 수강 설명 이미지
const detailImg1 = <img className="detail img1" src="https://cdn.class101.net/images/aaac23bf-682b-4e06-bfaa-e0c5a1d5bf9a/2048xauto.webp" alt="" />
const detailImg2 = <img className="detail img2" src="https://cdn.class101.net/images/bd6763f2-5fe4-4e20-93b5-586ede7b4515/2048xauto.webp" alt="그림2" />
const detailImg3 = <img className="detail img3" src="https://cdn.class101.net/images/cf838d00-61ce-440b-8ebc-cb22483fc925/960xauto.webp" alt="그림3" />
const detailImg4 = <img className="detail img4" src="https://cdn.class101.net/images/6bedd4fb-2713-4b40-b64b-4f6e6246cbd6/960xauto.webp" alt="그림4" />


const ClassImg = styled.div`
  /* width: auto; */
  height: 400px;
  width: 100%;
  margin: 16px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    box-sizing: border-box;
    object-fit: cover;
    margin: 5px;
    display: flex;
    height: 100%;
    width: 23%;
    transition: width 0.2s ease;
  }
  img:nth-child(1n):hover {
    /* overflow: hidden; */
    width: 100%;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  img:nth-child(4):hover {
    /* overflow: hidden; */
    width: 100%;
    transform-origin: bottom right;
  }
  .title {
    width: auto;
  }
`
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

// 양 쪽 메뉴 분할
const Classlist = styled.div`
  display:flex;
  margin: 0 auto;
  /* justify-content:space-evenly; */
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

// 오른쪽 메뉴

const Division2 = styled.div`
  box-sizing: border-box;
  margin-right:10px;
  height: auto;
  max-width: 25%;
  min-width: 25%;
  box-shadow: 1px 1px 1px 1px lightgray;
  /* padding: auto; */
`
const ClassCategory = styled.div`
  display: inline-block;
  margin: 1rem;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: bold;
  padding: 2px;
`
const ClassTitle = styled.div`
  margin: 1rem;
  margin-top:0;
  width: 90%;
  display: flex;
  flex-direction:column;
`
const ClassBtn = styled.div`
  display: flex;
  margin: 5px auto;
  width: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  li {
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 28%;
    border-radius: 5px;
    background-color: lightgray;
    img {
      width:15px;
      margin: 3px;
    }
  }
  li:hover {
    background-color: gray;
    cursor: pointer;
  }
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
const ReviewList = styled.div`
  width: 100%;
  /* margin: 10px auto; */
  border: 1px solid black;
  display:flex;
  flex-wrap:nowrap;
`
const ReviewPhoto = styled.div`
  display:flex;
  justify-content:center;
  width: 40%;
  border: 1px solid black;
  img {
    width: auto;
    height: 200px;
    object-fit: cover;
    overflow:hidden;
  }
`
const ReviewDesc = styled.div`
  margin: auto 5px;
  width: 90%;
  border: 1px solid black;
  padding: 5px;
  word-break: break-all;
`
const ReviewButton = styled.div`
  display:flex;
  justify-content: right;
  margin: 5px 2px;
  button {
    margin: 0 2px;
  }
`

// Division1 에 들어가는 목차 및 내용 화면 전환을 위한 함수
const Lecture = () => {
  const [menuSel, setMenuSel] = useState(1);
  const [DescSel, setDescSel] = useState(1);
  const MenuIndex = (count) => {
    setMenuSel(count);
    setDescSel(count);
  }

  return (
    <BodyContainer>
      <h1>요리</h1>
      <ClassImg>
          {detailImg1}
          {detailImg2}
          {detailImg3}
          {detailImg4}
      </ClassImg>
      <ClassMenu>
        <div className="menu menu1">
          <div className={`menutree ${menuSel === 1 ? `select` : 'nosel'}`} onClick={()=>{MenuIndex(1)}}>클래스 소개</div>
          <div className={`menutree ${menuSel === 2 ? `select` : 'nosel'}`} onClick={()=>{MenuIndex(2)}}>크리에이터</div>
          <div className={`menutree ${menuSel === 3 ? `select` : 'nosel'}`} onClick={()=>{MenuIndex(3)}}>후기</div>
        </div>
        </ClassMenu>
        <Classlist>
          <Division1 >
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
            {/* 크리에이터 */}
            <div className={`${DescSel === 2 ? `descSel` : `descNoSel`}`}>
              <Contain>
                <ClassCreatorDesc>
                  <div>
                    크리에이터<br/>
                    <b>주먹밥쿵야</b> 입니다.
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
            {/* 후기 */}
            <div className={`${DescSel === 3 ? `descSel` : `descNoSel`}`}>
              <Contain>
                <ReviewTitle>
                  실제로 클래스를 진행한 수강생들의 생생한 후기 `50`개가 있어요.
                </ReviewTitle>
                <ReviewList>
                  <ReviewPhoto>
                    <img src="https://cdn.class101.net/images/1dfa3159-518b-43f7-9647-6dc8f53de06d/2048xauto.webp" alt="" />
                  </ReviewPhoto>
                  <div>
                    <ReviewButton>
                      <button>수정</button>
                      <button>삭제</button>
                    </ReviewButton>
                    <ReviewDesc>
                      <div>
                      넘 재밌썼써용ㅇㅇㅇㅇㅇㅇㅇ
                      ddddddddddddddddddddddd
                      ddddddddddddddddddddddd
                      ddddddddddddddfffffffffffffffffffff!
                      </div>
                    </ReviewDesc>
                  </div>
                </ReviewList> 
                <div>
                  <button>이전 후기 보기</button>
                  <button>다음 후기 보기</button>
                </div>
              </Contain>
            </div>
          </Division1>
          <Division2>
            <Contain>
              <ClassCategory>
                일식
              </ClassCategory>
              <ClassTitle>
                <h3>미슐랭3스타 '칸다' 출신 '코우지 셰프'에게 배우는 스시 오마카세</h3>
              </ClassTitle>
              <ClassBtn>
                <li><img src={heart_icon} alt="" />찜하기</li>
                <li><img src={like_icon} alt="" />좋아요</li>
                <li><img src={heart_icon} alt="" />공유</li>
              </ClassBtn>
              <StyledButton>구독하기</StyledButton> 
              <ClassTitle>
              <h2>강의 장소</h2>
              서울특별시 양천구 목동중앙북로10길 45
              </ClassTitle>
              <NaverMap>{/* 네이버 지도 */}</NaverMap>
            </Contain>
          </Division2>
        </Classlist>
      
    </BodyContainer>
  )
}

export default Lecture;