import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../images/banner.jpeg";
import heart from "../images/heart.png";
import AxiosApi from "../api/AxiosApi";
import rightarrow from "../images/rightarrow.png"

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
  position: relative;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 100px;

  span {
    font-size: 0.6em;
    font-weight: normal;
    color: gray;
  }

  img {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 40px;
  }
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
  border: none;
  margin-bottom: 65px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  border: 1px solid lightgray;

`;

const Thumbnail = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 150px;
  object-fit: cover;
  border: 1px solid coral;
`;

const Category = styled.p`
  margin: 0 0;
  font-size: 0.6rem;
  font-weight: normal;
  margin-top: 5px;
  color: gray;
`;

const Title = styled.h3`
  font-size: .9rem;
  font-weight: bold;
  margin-top: 5px;
`;

const Description = styled.p`
  font-size: 0.6rem;
  font-weight: normal;
  margin-top: 5px;
  color: gray;
`;
const Price = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 5px;
`;

const Heart = styled.div`
  position: absolute;
  top: 100px;
  right: 8px;
  img {
    width: 15px;
    height: 15px;
  }
    
`;
const Section2 = styled.div`
  font-weight: bold;
  font-size: 1.3em;
`;

const SectionBox2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  border: 1px solid lightgray;
`;


const Mypage = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState("");
  const id = window.localStorage.getItem("userId");

   // 모달(팝업 처리)
   const [modalOpen, setModalOpen] = useState(false);
   const closeModal = () => {
     setModalOpen(false);
   } 

   useEffect(() => {
    const memberInfo = async() => {
      const rsp = await AxiosApi.memberGet(id);
      if(rsp.status === 200) setMemberInfo(rsp.data);
    };
    memberInfo();
},[]);

   return(
    <BodyContainer>
      <SideBar>
        <IdList>
          <Link to="/Myedit" style={{ textDecoration: "none", color: "inherit"}}><div>{id}님</div>  {/** 선택 시 회원 정보 창으로 넘어가게 */}
          {memberInfo && memberInfo.map(member => (<span key={member.id}>{member.mail}<img src={rightarrow} alt="우측화살표"></img></span>))}</Link>
        </IdList>
        <List>
          <div>
            <li>내 클래스</li>
            <li><Link to="/MyClass" style={{ textDecoration: "none", color: "inherit"}}>수강 중인 클래스</Link></li>
            <li><Link to="/Myedit" style={{ textDecoration: "none", color: "inherit"}}>위시리스트</Link></li>
            <li><Link to="/MyReview" style={{ textDecoration: "none", color: "inherit"}}>내 후기</Link></li>
            <li><Link to="/MyOrder" style={{ textDecoration: "none", color: "inherit"}}>주문 내역</Link></li>
            <li>구독권</li>
            <li><Link to="/MySubs" style={{ textDecoration: "none", color: "inherit"}}>내 구독권</Link></li>
          </div>
        </List>
      </SideBar>
      <Section>
      <a href="https://www.naver.com/"
         target="_blank"
         rel="noopener noreferrer"><Banner></Banner></a>
        <Section1>           {/** 여기 맵으로 돌려서 끌고 오기 */}
          <p>수강 중인 클래스</p>
          <SectionBox1>
          <Heart><div><img src={heart} alt="좋아요" /></div></Heart>
          <Thumbnail alt="class thumbnail" />
          <Category>Category Name</Category>
          <Title>Class Title</Title>
          <Description>이 강의는 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 입니다</Description>
          <Price>$100</Price>
          </SectionBox1>
        </Section1>
        <Section2>
          <p>위시리스트</p>
          <SectionBox2>      {/** 여기 맵으로 돌려서 끌고 오기 */}
            <Thumbnail alt="class thumbnail" />
            <Category>Category Name</Category>
            <Title>Class Title</Title>
            <Description>이 강의는 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 입니다</Description>
            <Price>$100</Price>
          </SectionBox2>
        </Section2>
      </Section>
    </BodyContainer>
   )
}

export default Mypage;