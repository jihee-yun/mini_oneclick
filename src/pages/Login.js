import React, { useContext, useState } from "react";
import Modal from "../utils/Modal";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserInfo";
// import Header from "./Header";
// import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  margin: 0 auto;

  .title {
    margin-top: 10px;
  }
  
  .item1 {
    margin: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .enable-button {
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #FC7373;
    color: white;
    border: none;
    width: 600px;
    height: 40px;
    width: 415px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }

  .title {
    text-align: center;
  }

  .disable-button {
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: lightgrey;
    color: white;
    border: none;
    width: 415px;
    height: 40px;
    border-radius: 5px;
  }

  .hint {
    display: flex;
    margin-top: -5px;
    margin-right: 40px;
    justify-content: center;
    align-items:center;
    font-size: 12px;
  }

  .success {
    color: royalblue;
    font-size: 13px;
  }

  .error {
    color: red;
    font-size: 13px;
  }

  .signup {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: grey;
    font-size: 13px;

    .link_style {
      color: inherit;
    }
    p {
      margin-right: .5em;
    }
  }

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: grey;
    font-size: 13px;
    margin-top: -7px;

    .link_style {
      color: inherit;
    }

    p {
      margin-right: .5em;
    }
  }


`;

const Input = styled.input`
  margin-left: 30px;
  margin-right: 30px;
  width: 400px;
  height: auto;
  line-height : normal;
  padding: .8em .5em;
  font-family: inherit;
  border: 1px solid #999;
  border-radius: 2px;
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;

const Login = () => {
  const navigate = useNavigate(); // 라우터 이동을 하기 위해서

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  // 모달(팝업) 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  }
  const confirmModal = () => {
    console.log("확인 버튼이 눌렸습니다.")
  }

  // // 로그인 상태 체크
  // const [isLogin, setIsLogin] = useState(false);

  const onChangeId = (e) => {
      const regexId = /^\w{5,20}$/;
      setInputId(e.target.value);
      if(!regexId.test(e.target.value)) {
          setIsId(false);
      } else  {
          setIsId(true);
      }
  }
  const onChangePw = (e) => {
      const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,16}$/;
      const passwordCurrent = e.target.value;
      setInputPw(passwordCurrent)
      if (!passwordRegex.test(passwordCurrent)) {
          setIsPw(false)
      } else {
          setIsPw(true);
      }
  }

  const { setUserName, setPhone, setMail, setMemberNum } = useContext(UserContext);

  const onClickLogin = async() => {
    // 로그인을 위한 axios 호출
    const response = await AxiosApi.memberLogin(inputId, inputPw);
    console.log(response.data);
    if(response.data === true) {
      // 회원정보 조회 api호출(로그인 성공시)
      const memberInfo = await AxiosApi.memberGet(inputId);
      console.log(memberInfo.data); // 테스트용 추후 반드시 주석처리
      // 조회한 회원 정보를 UserContext에 저장(PG사 요구데이터 and oneclick 데이터베이스 맞추기위해 필요..)
      setUserName(memberInfo.data.name);
      setPhone(memberInfo.data.phone);
      setMail(memberInfo.data.email);
      setMemberNum(memberInfo.data.membernum);
      

      navigate("/mypage");
    } else {
      console.log("로그인 에러!!");
      setModalOpen(true);
    }
  }

  // const clickLogin = async () => {
  //   setIsLogin(true);
  // }

  // const clickLogout = async () => {
  //   setIsLogin(false);
  // }
  // // 로그아웃 버튼 클릭시
  // const onClickLogout = () => {
  //   setIsLogin(false);
  // };

  return(
    <>
    {/* <Header /> */}
      <Container>
          <div className="title">
            <h2>ONE Click에서 더 빠르게 즐기세요!</h2>
            <h3>로그인 하기</h3>
          </div>
          <div className="item1">
            <Input placeholder="아이디" value ={inputId} onChange={onChangeId}/>
          </div>
          <div className="item1">
            <Input type="password" placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
          </div>
          <div className="item1">
          {(isId && isPw) ?
            <button className="enable-button" onClick={onClickLogin}>로그인</button>  :
            <button className="disable-button" >로그인</button>}
          </div>
          <div className="signup">
            <p>회원가입이 필요하신가요? </p>
            <Link to="signup" className="link_style">회원가입</Link>
          </div>
          <div className="check">
            <p>회원정보가 기억나지 않으신가요? </p>
            <Link to="signup" className="link_style">ID / PW 찾기</Link>
          </div>
          <Modal open={modalOpen} type={true} consfirm={confirmModal} close={closeModal} header="오류">
            아이디 및 패스워드 재확인 필요
          </Modal>
          {/* <Footer /> */}
      </Container>
      </>
  );
};

export default Login;