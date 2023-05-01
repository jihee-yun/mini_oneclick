import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BodyContainer = styled.div`
  padding: 130px;
  display: flex;
  flex-direction: row;
`;

const SideBar = styled.div`
  /* background-color: rgb(0,255,50); */
  margin-right: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const IdList = styled.div`
  
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 100px;
`;

const List = styled.div`
  li {
    list-style: none;
    margin: 20px 0;
    &:nth-child(1) {
      font-weight: bold;
      font-size: 1.3em;
      margin-bottom: 35px;
    }
    &:nth-child(2) {
      color: #6E6E6E;
      font-size: .9em;
    }
    &:nth-child(3) {
      color: #6E6E6E;
      font-size: .9em;
      
    }
    &:nth-child(4) {
      color: #6E6E6E;
      font-size: .9em;
      
    }
    &:nth-child(5) {
      color: #6E6E6E;
      font-size: .9em;
      margin-bottom: 50px;
    }
    &:nth-child(6) {
      font-weight: bold;
      font-size: 1.3em;
      margin-bottom: 35px;
    }
    &:nth-child(7) {
      color: #6E6E6E;
      font-size: .9em;
    }
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid darkgray;
  margin-bottom: 65px;
;`

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Section1 = styled.div`
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 50px;
`;

const SectionBox1 = styled.div`
  width: 200px;
  height: 250px;
  border: 1px solid lightgray;
`;

const Section2 = styled.div`
  font-weight: bold;
  font-size: 1.3em;
`;

const SectionBox2 = styled.div`
  width: 200px;
  height: 250px;
  border: 1px solid lightgray;
`;


const MyClass = () => {
  const navigate = useNavigate();

   // 모달(팝업 처리)
   const [modalOpen, setModalOpen] = useState(false);
   const closeModal = () => {
     setModalOpen(false);
   } 

   return(
    <BodyContainer>
      <SideBar>
        <IdList>
          <Link to="/Myedit" style={{ textDecoration: "none", color: "inherit"}}><div>프로필(아이디)</div></Link>  {/** 선택 시 회원 정보 창으로 넘어가게 */}
        </IdList>
        <List>
          <div>
            <li>내 클래스</li>
            <li>수강 중인 클래스</li>
            <li>위시리스트</li>
            <li>내 후기</li>
            <li>주문 내역</li>
            <li>구독권</li>
            <li>내 구독권</li>
          </div>
        </List>
      </SideBar>
      <Section>
      <Banner>광고 들어갈 자리</Banner>
        <Section1>   {/** 여기 맵으로 돌려서 끌고 오기 */}
          <p>수강 중인 클래스</p>
          <SectionBox1>
            1번
          </SectionBox1>
        </Section1>
      </Section>
    </BodyContainer>
   )
}

export default MyClass;