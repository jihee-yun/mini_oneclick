import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`

  width: 100%;
  /* height: 70px; */
  position: fixed;
  bottom: 0;
  font-size: 15px;
  /* margin-top: auto; */
  /* display: flex;
  flex-direction: column; */
  
  /* .DivFooter {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  li {
    list-style: none;
  }
`;

const Section1 = styled.ul`
  display: flex;
  flex-direction: column;

`;


const Footer = () => {

  return(
    < FooterStyled>
      <footer>
        <div className="DivFooter">
          <div className="Container">
            <Section1>
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
              <p>고객지원</p>
              <p>평일 9:00 ~ 16 : 00</p>
            </Section1>
          </div>
          <p className="PFooter">
            <b>회사명</b> ONE Click <b>주소</b> 대한민국 서울특별시 강남구 테헤란로14길 6 <b>대표</b> 김대표 <b>사업자등록번호</b>1234321 <br />
            <b>통신판매업 신고번호</b> 2024-대한민국-4202 <b>대표번호</b> 02-1234-1234
          </p>
        </div>
      </footer>
    </FooterStyled>
  );
};

export default Footer;