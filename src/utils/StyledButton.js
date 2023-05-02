import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  color: white;
  font-weight:bold;
  height: 40px;
  background-color: #FC7373;
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