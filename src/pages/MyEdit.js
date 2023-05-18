import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import account from "../images/account.png";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import Modal from "../utils/Modal";

const BodyContainer = styled.div`
  width: 100vw;
`;

const Container = styled.div`
  background-color: #FEFDFD;
  width: 40%;
  margin: 3px auto;
  border: 1px solid lightgray;
  padding: 30px;

`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;

  button {
    cursor: pointer;
    font-size: 0.8em;
    width: 60px;
    height: 20px;
    border: 1px solid lightgrey;
    background-color: white;
  }


  li{
    list-style: none;
    font-weight: normal;
    font-size: .5em;
    margin: 10px 0;
  }
  ul {
    font-weight: bold;
    font-size: .8em;
    padding-left: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .PFooter {
    font-size: .6em;
    margin-top: 30px;
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
    height: 25px;
    border: none;
    background-color: white;
    top : 53.5px;
    right: 0;
    cursor: pointer;
    font-weight: bold;
    &:hover {
    color: darkgray;
    }
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

const TelModal = styled.div`
  width: 100%;
  margin: 0 auto;
  
  input {
    width: 80%;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 2px;
  }
  p {
    font-size: 0.9em;
    font-weight: bold;
  }
  div {
    font-size: 0.8em;
    font-weight: bold;
    color: #FC7373;
  }
`;

const MailModal = styled.div`
   width: 100%;
   margin: 0 auto;
  
  input {
    width: 80%;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 2px;
  }
  p {
    font-size: 0.9em;
    font-weight: bold;
  }
  div {
    font-size: 0.8em;
    font-weight: bold;
    color: #FC7373;
  }
`;


const MyEdit = () => {

  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { userId } = context;

  // 회원 정보 조회 및 전화번호, 이메일 수정
  const [memberInfo, setMemberInfo] = useState("");
  const [inputTel, setInputTel] = useState("");
  const [inputMail, setInputMail] = useState("");

  const [modalCall, setModalCall] = useState(false);

  // 전화번호, 이메일 유효성 체크
  // const [isTel, setIsTel] = useState(false);
  // const [isMail, setIsMail] = useState(false)

  // 오류 메세지
  const [telMsg, setTelMsg] = useState("");
  const [mailMsg, setMailMsg] = useState("");

  // 모달
  const [delModalOpen, setDelModalOpen] = useState(false);
  const [telModalOpen, setTelModalOpen] = useState(false);
  const [mailModalOpen, setMailModalOpen] = useState(false);

  useEffect(() => {
    const memberInfo = async() => {
      const rsp = await AxiosApi.myInfoGet(userId);
      if(rsp.status === 200) setMemberInfo(rsp.data);
    };
    memberInfo();
  },[userId]);

  const deleteMem = () => {
    setDelModalOpen(true);
  }

  const updateTel = () => {
    setTelModalOpen(true);
    //   window.location.reload();
  }

  const updateEmail = () => {
    setMailModalOpen(true);
  }

  const call = () => {
    setModalCall(true);
  };

  const confirm = async(modalType) => {
    if(modalType === "del") {
      const response = await AxiosApi.deleteMem(userId);
      console.log(response.data);
      if(response.data === true) navigate('/home');
    } else if(modalType === "upTel") {
        const telCheck = await AxiosApi.telRegCheck(inputTel);
        console.log("가입 가능 여부 확인 : ", telCheck.data);
        if(telCheck.data === true) {
          const response = await AxiosApi.updateTel(userId, inputTel);
          console.log(response.data);
          if(response.data === true) {
            const updatedInfo = await AxiosApi.myInfoGet(userId);
            if (updatedInfo.status === 200) {
              setMemberInfo(updatedInfo.data);
              setTelModalOpen(false);
              setInputTel("");
            }
          }
        } else {
            setTelMsg("이미 등록된 전화번호입니다");
        }
    } else if(modalType === "upMail") {
        const mailCheck = await AxiosApi.mailRegCheck(inputMail);
        console.log("가입 가능 여부 확인 : ", mailCheck.data);
        if(mailCheck.data === true) {
          const response = await AxiosApi.updateMail(userId, inputMail);
          console.log(response.data);
          if(response.data === true) {
            const updatedInfo = await AxiosApi.myInfoGet(userId);
            if (updatedInfo.status === 200) {
              setMemberInfo(updatedInfo.data);
              setMailModalOpen(false);
              setInputMail("");
            }
          }
      } else {
          setMailMsg("이미 등록된 메일입니다");
      }
    }
  }

  const onChangeTel = (e) => {
    console.log(e.target.value);
    setInputTel(e.target.value);
  }

  const onChangeMail = (e) => {
    console.log(e.target.value);
    setInputMail(e.target.value);
  }

  const closeModal = () => {
    setDelModalOpen(false);
    setTelModalOpen(false);
    setMailModalOpen(false);
    setModalCall(false);
  } 

  return(
  <>
  <BodyContainer>
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
          <input type="text" placeholder={member.name} readOnly></input>
        </div>
      </Label>
      <Label>
        <div>
          <p>전화번호</p>
          <div className="phone" ></div>
          <input type="tel" placeholder={member.tel} readOnly/>  {/** place로 기존 아이디 받아오고  */}
          <button onClick={updateTel}>수정</button>
        </div>
      </Label>
      <Label>
        <div>
          <p>이메일</p>
          <div className="email" ></div>
          <input type="email" placeholder={member.mail} readOnly/>
          <button onClick={updateEmail}>수정</button>
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
      <button onClick={deleteMem}>회원 탈퇴</button>
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
      <li>평일 9:00 ~ 16:00</li>
      <div>
        <button className="callBtn" onClick={call}>문의</button>
        <Modal open={modalCall} close={closeModal}>
          상담원 전화 연결 : 1644-1644
        </Modal>
      </div>
    </ul>
    </Footer>
    </Container>
    </BodyContainer>
    <Modal open={delModalOpen} type={true} close={closeModal} confirm={() => confirm("del")} header="회원탈퇴">
              정말 탈퇴하시겠습니까?
    </Modal>
    <Modal open={telModalOpen} type={true} close={closeModal} confirm={() => confirm("upTel")} header="전화번호 수정">
      <TelModal>
        <p>수정할 전화번호를 입력해주세요</p> 
        <br />
        <input type="tel" value={inputTel} onChange={onChangeTel} />
        <div>
          <p>{telMsg}</p>
        </div>
      </TelModal>
    </Modal>
    <Modal open={mailModalOpen} type={true} close={closeModal} confirm={() => confirm("upMail")} header="이메일 수정">
      <MailModal>
        <p>수정할 이메일을 입력해주세요</p> 
        <br />
        <input type="tel" value={inputMail} onChange={onChangeMail} />
        <div>
          <p>{mailMsg}</p>
        </div>
      </MailModal>
    </Modal>
    </>
  )
}

export default MyEdit;