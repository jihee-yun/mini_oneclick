import React, { useEffect, useState } from "react";
import styled from "styled-components";
import account from "../images/account.png";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";

const Container = styled.div`
  background-color: #FEFDFD;
  width: 600px;
  margin: 3px auto;
  border: 1px solid lightgray;
  padding: 30px;

 
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;

  li{
    list-style: none;
    font-weight: normal;
    font-size: .6em;
    margin: 10px 0;
  }
  ul {
    font-weight: bold;
    font-size: .9em;
    padding-left: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .PFooter {
    font-size: .6em;
    margin-top: 30px;
    margin-right: 50px;
  }
`;

const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.2em;
    font-weight: bold;
  }
   
  div {
   
  }
`;

const Section2 = styled.div`
  width: 80%;
  margin: 0 auto;
  p {
      font-size: .9em;
      font-weight: bold;
    }

    input {
      width: 100%;
      height: 35px;
      border: 1px solid lightgray;
      border-radius: 2px;
    }
`;

const Label = styled.label`
  position: relative;

  button {
    position: absolute;
    height: 35px;
    border: none;
    background-color: white;
    top : 49.5px;
    right: 0;
    cursor: pointer;
    font-weight: bold;
  }
`;

const DeleteMem = styled.div`
  width: 80%;
  margin: 30px auto;

  button {
    width: 100%;
    height: 35px;
    font-size: .8em;
    font-weight: bold;
    background-color: #FC7373;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      background-color: lightgray;
    }
  }

  hr {
    background-color: lightgray;
    border: .3px solid lightgray;
  }
`;


const MyEdit = () => {
  const navigate = useNavigate();
    const [memberInfo, setMemberInfo] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const id = window.localStorage.getItem("userId");

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

  const deleteMem = async() => {
    setModalOpen(true);
  }

  const confirm = async() => {
    const response = await AxiosApi.deleteMem(id);
    console.log(response.data);
    if(response.data === true) navigate('/Home');
  }

  return(
  <>
  <Container>
    <Section>
      <Link to="/Home" style={{ textDecoration: "none", color: "inherit"}}>
        <div className="logo">
          <p>ONE Click</p>
        </div>
      </Link>
      <Link to="/Mypage" style={{ textDecoration: "none", color: "inherit"}}>
        <div>
          <img src={account} alt="계정 로고" style={{width: "25px", height: "25px"}}/>
        </div>
      </Link>
    </Section>
    {memberInfo && memberInfo.map(member => (
    <Section2 key={member.id}>
      <Label>
        <div>
          <p>이름</p>
          <div className="id" ></div>
          <input type="text" placeholder={member.id} readOnly></input>
        </div>
      </Label>
      <Label>
        <div>
          <p>전화번호</p>
          <div className="phone" ></div>
          <input type="tel" placeholder={member.tel}/>  {/** place로 기존 아이디 받아오고  */}
          <button>수정</button>
        </div>
      </Label>
      <Label>
        <div>
          <p>이메일</p>
          <div className="email" ></div>
          <input type="email" placeholder={member.mail}/>
          <button>수정</button>
        </div>
      </Label>
      <Label>
        <div>
          <p>강사</p>
          <div className="isteacher" ></div>
          <input type="text" placeholder={member.isTeacher} readOnly/>
        </div>
      </Label>
      <Label>
        <div>
          <p>가입일</p>
          <div className="regDate" ></div>
          <input type="text" placeholder={member.created} readOnly/>
        </div>
      </Label>
    </Section2>
    ))}
    <DeleteMem>
      <button>회원 탈퇴</button>
      <hr />
    </DeleteMem>
    <Footer>
    <ul> ONE Click
      <li><a href="#!">공지사항</a></li>
      <li><a href="#!">서비스 소개</a></li>
      <li><a href="#!">채용</a></li>
    </ul>
    <ul> 이용안내
      <li><a href="#!">클래스 가이드</a></li>
      <li><a href="#!">구독권 가이드</a></li>
      <li><a href="#!">제휴</a></li>
   </ul>
    <ul> 정책
      <li><a href="#!">이용 약관</a></li>
      <li><a href="#!">개인정보 처리방침</a></li>
    </ul>
    <ul>고객지원
      <li>평일 9:00 ~ 16 : 00</li>
    </ul>
    <p className="PFooter">
      <b>회사명</b> ONE Click <b>주소</b> 대한민국 서울특별시 강남구 테헤란로14길 6 <b>대표</b> 김대표 <b>사업자등록번호</b> 1234321
      <br /><b> 통신판매업 신고번호</b> 2024-대한민국-4202 <b>대표번호</b> 02-1234-1234
    </p>
    </Footer>
    </Container>
    </>
  )
}

export default MyEdit;