import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainIMG from "./Lecture_MainIMG"
import LeftDivision from "./Lecture_LeftDivision";
import RightDivision from "./Lecture_RightDivision";
import Footer from "./Footer";



const BodyContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
`



// 양 쪽 메뉴 분할
const Classlist = styled.div`
  display:flex;
  margin: 0 auto;
`

const Lecture = () => {

  return (
    <BodyContainer>
      <MainIMG></MainIMG>
      <Classlist>
        <LeftDivision/>
        <RightDivision/>
      </Classlist>
    </BodyContainer>
    
  )
}

export default Lecture;