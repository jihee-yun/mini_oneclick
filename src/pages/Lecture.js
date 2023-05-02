import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import StyledButton from "../utils/StyledButton"
import arrow from "../images/rightarrow.png";
import like_icon from "../images/like_icon.png"
import heart_icon from "../images/heart_icon.png"

const BodyContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;

`

// 수강 설명 이미지
const titleImg = <img className="title" src="https://cdn.class101.net/images/aaac23bf-682b-4e06-bfaa-e0c5a1d5bf9a/2048xauto.webp" alt="" />
const detailImg1 = <img className="detail img1" src="https://cdn.class101.net/images/bd6763f2-5fe4-4e20-93b5-586ede7b4515/2048xauto.webp" alt="그림2" />
const detailImg2 = <img className="detail img2" src="https://cdn.class101.net/images/cf838d00-61ce-440b-8ebc-cb22483fc925/960xauto.webp" alt="그림3" />
const detailImg3 = <img className="detail img3" src="https://cdn.class101.net/images/6bedd4fb-2713-4b40-b64b-4f6e6246cbd6/960xauto.webp" alt="그림4" />

const desc1 = <img src="https://cdn.class101.net/images/17f14836-85a3-4b50-bc4f-cfd47f64cc80/2048xauto.webp" alt="" />
const desc2 = <img src="https://cdn.class101.net/images/79fad2df-c8dc-4d18-82bd-619c8d15a8c4/2048xauto.webp" alt="" />


const ClassImg = styled.div`
  /* width: auto; */
  height: 400px;
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    margin: 5px;
    display: flex;
    height: 95%;
    width: 300px;
  }
  .title {
    width: auto;
  }
`
const ClassMenu = styled.div`
  width: 65%;  
  height: 30px;
  padding: 20px 0;

  .menu {
    display: flex;
    flex-direction: row;;
  }
  .menutree { 
    margin: 5px;
    padding: 10px;
    height: 100%;
    display:flex;
    align-items: center;
    font-weight: bold;
    border-bottom: 3px solid black;
  }
`;

// 양 쪽 메뉴 분할
const Classlist = styled.div`
  display:flex;
`

// 왼쪽 메뉴 스타일
const Division1 = styled.div`
  width: 70%;
  /* border: 1px solid black;  */
  box-shadow: 1px 1px 1px 1px lightgray;
`

const ClassDescTitle = styled.div`
  width: 98%;  
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1.5rem;
`
const ArrowImg = styled.div`
  display: flex;
  border: 1px solid black;
  width: auto;
  img {
    height: 30px;
    flex-direction: row;
    justify-content: center;
    border: 1px solid black;
  }
`
const Introduction = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  /* margin: 5px; */
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
    /* border: 1px solid black; */
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
  /* border: 1px solid black; */
`

// 오른쪽 메뉴

const Division2 = styled.div`
  margin-right:10px;
  width: 30%;
  /* border: 1px solid black; */
  box-shadow: 1px 1px 1px 1px lightgray;
`
const ClassTitle = styled.div`
  margin: 20px auto;
  width: 90%;
  display: flex;
  flex-direction:column;
  /* border: 1px solid black; */
`
const ClassBtn = styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin: 5px auto;
  width: 100%;
  justify-content: space-between;
  li {
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
    list-style: none;
    /* white-space: nowrap; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 28%;
    border-radius: 2px;
    background-color: lightgray;
    img {
      width:20px;
      /* height:20px; */
      margin: 3px;
  }
  }
  
`

const Lecture = () => {


  return (
    <BodyContainer>
      <h1>요리</h1>
      <ClassImg>
          {titleImg}
          {detailImg1}
          {detailImg2}
          {detailImg3}
      </ClassImg>
      <ClassMenu>
        <div className="menu">
          <div className="menutree menu1">클래스 소개</div>
          <div className="menutree menu2">크리에이터</div>
          <div className="menutree menu3">후기</div>
        </div>
        </ClassMenu>
        <Classlist>
          <Division1>
            <ClassDescTitle>
              <p>이런 걸 배울 거예요.</p>
              <ArrowImg>
                <img src={arrow} />
                <img src={arrow} />
              </ArrowImg>
            </ClassDescTitle>
            <Introduction>
              <li>
                {desc1}
                <p>강의 내용 간략히 소개 하는 곳</p>
              </li>
              <li>
                {desc2}
                <p>강의 내용 간략히 소개 하는 곳</p>
              </li>
              <li>
                {desc1}
                <p>강의 내용 간략히 소개 하는 곳</p>
              </li>
            </Introduction>
            <ClassDetailTitle>
              <h3><span>초급자</span>분들을 위한 <span>일식 요리, 오마카세</span> 클래스 입니다.</h3>
            </ClassDetailTitle>
            <ClassDetail>
              자세한 강의 설명은 여기로
            </ClassDetail>
            </Division1>
          <Division2>
            <ClassTitle>
              <h3>미슐랭3스타 '칸다' 출신 '코우지 셰프'에게 배우는 스시 오마카세</h3>
              <ClassBtn>
                <li><img src={heart_icon} alt="" />찜하기</li>
                <li><img src={like_icon} alt="" />좋아요</li>
                <li><img src={heart_icon} alt="" />공유하기</li>
              </ClassBtn>
              <StyledButton>구독하기</StyledButton>
            </ClassTitle>
          </Division2>
        </Classlist>
      
    </BodyContainer>
  )
}

export default Lecture;