import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  color: white;
  font-weight:bold;
  height: 40px;
  width: 100%;
  background-color: #FC7373;
  border: none;
  :hover {
    cursor: pointer;
  }
`

// 구독 결제 이동
const onClick = () => {
  
}

function Button ({children}) {
  
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}
export default Button;