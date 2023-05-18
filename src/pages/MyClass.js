import React from "react";
import styled from "styled-components";
import PartOfClass from "./MyPartOfClass";

const Container = styled.div`
  font-weight: bold;
  font-size: 1.3em;
  
  .head {
    margin-bottom: 50px;
    }
`;

const MyClass = () => {
  // const navigate = useNavigate();

   // 모달(팝업 처리)
  //  const [modalOpen, setModalOpen] = useState(false);
  //  const closeModal = () => {
  //    setModalOpen(false);
  //  } 

   return(
   <>
   <Container>
      <p className="head">수강 중인 클래스</p>
      <PartOfClass></PartOfClass>
    </Container>
   </>
   )
}

export default MyClass;