import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import mypage from "../images/mypage.png";
import wish from "../images/wish.png";
import { UserContext } from "../context/UserInfo";
import all from "../images/all.png";
import hot from "../images/hot.png";
import cook from "../images/cook.png";
import bake from "../images/bake.png";
import diy from "../images/diy.png";
import exercise from "../images/exercise.png";


const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  height: 150px;

  .logoTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dummyBox {
    flex-grow: 1;
  }

  .searchBox {
    input {
      border: 1px solid lightgrey;
      width: 180px;
      height: 25px;
    }
    input::placeholder {
    color: gray;
    }
    
    button {
      border: 1px solid lightgrey;
      height: 29px;
      margin-left: 5px;
      margin-right: 0;
      color: gray;
    }
    button:hover {
      background-color: lightgrey;
    }
  }

  .buttonImg {
    float: right;
    padding-top: 3px;
    img {
      margin-left: 15px;
      margin-right: 3px;
    }
  }

  button {
    float: right;
    margin-right: 50px;
    height: 30px;
    background-color: white;
    border: none;
  }
`;

const NavBlock = styled.ul`
  padding: 0;
  width: 100%;

  .firstMenu {
    display: inline-block;
    padding: 30px;
  }

  .link_style {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .classMenu {
    display: none;
    position: absolute;
    pointer-events: none;
    padding: 0;
    margin-left: -30px;
    transition: 1s;
    list-style: none;
    z-index: 1;

    /* background-color: white; */

    li {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      float: left;
      margin-left: 30px;
      margin-top: 10px;
      text-align: left;
    }

    li span {
      display: block;
      font-size: .9em;
    }

    li img {
      width: 18px;
      height: 18px;
      display: flex;
      margin-right: 5px;
      margin-bottom: 8px;
      text-align: center;
    }
  }

  li:hover ul {
    display: inline-block;
    display: block;
    pointer-events: auto;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  // Context API 값 저장
  const context = useContext(UserContext);
  const {isLogin, setIsLogin} = context;

  const onChange = (e) => {
    setSearchInput(e.target.value);
  }

  const logoutClick = () => {
    setIsLogin(false);
    // setUserId("");
    navigate('/home');
  }

  return(
    <>
    <HeaderBlock>
      <header>
        <div className="logoTop">
          <Link to="/home">
            <img src={logo} alt="로고" style={{width: "100px", height: "75px"}} />
          </Link>
          <div className="dummyBox"></div>
          <div className="searchBox">
            <input type="text" value={searchInput} onChange={onChange} placeholder="찾으시는 클래스가 있나요?"/>
            <Link to={`/Search/${searchInput}`}>
              <button >검색</button>
            </Link>
          </div>
          <div className="buttonImg">
            <Link to="/">
              <img src={mypage} alt="마이페이지" style={{width: "18px", height: "18px"}}/>
            </Link>
            <Link to="/">
              <img src={wish} alt="위시리스트" style={{width: "18px", height: "18px"}}/>
            </Link>
          </div>
          <div>
            {!isLogin && (
              <button className="loginBtn">
                <Link to="/login" style={{ textDecoration: "none", color: "inherit"}}>로그인 /</Link>
                <Link to="/signup" style={{ textDecoration: "none", color: "inherit"}}> 회원가입</Link>
              </button>
            )}
            {isLogin && (
              <button className="logoutBtn" onClick={logoutClick}>로그아웃</button>
            )}
          </div>
        </div>
      </header>
      <NavBlock>
        <ul>
          <li className="firstMenu"><Link to="/" className="link_style">클래스</Link>
            <ul className="classMenu">
              <br /><br />
              <li><img src={all} alt="전체메뉴" /><span>전체</span></li>
              <li><img src={hot} alt="인기메뉴" /><span>인기</span></li>
              <li><img src={cook} alt="요리" /><span>요리</span></li>
              <li><img src={bake} alt="베이킹" /><span>베이킹</span></li>
              <li><img src={exercise} alt="운동" /><span>운동</span></li>
              <li><img src={diy} alt="공예" /><span>공예</span></li>
            </ul>
          </li>
          <li className="firstMenu"><Link to="/" className="link_style">이벤트</Link></li>
          <li className="firstMenu"><Link to="/" className="link_style">구독권</Link></li>
        </ul>
      </NavBlock>
    </HeaderBlock>
    <hr style={{backgroundColor:"lightgray", border:".3px solid lightgray" }}/>
    </>
  );
};

export default Header;