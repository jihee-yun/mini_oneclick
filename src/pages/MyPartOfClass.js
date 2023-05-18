import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import heart from "../images/whiteheart.png";
import x from "../images/x.png"
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";


const Section1 = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.3em;
  gap: 80px;

  .no {
    width: 100%;
    text-align: center;
    margin-top: 100px;
    font-size: 0.6em;
    color: darkgray;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const SectionBox1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 290px;
  /* border: 1px solid lightgray; */
  margin-bottom: 50px;
`;

const Thumbnail = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 150px;
  object-fit: cover;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const Category = styled.p`
  margin: 0 0;
  font-size: 0.6rem;
  font-weight: normal;
  margin-top: 5px;
  color: gray;
`;

const Title = styled.h3`
  font-size: .8rem;
  font-weight: bold;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 0.6rem;
  font-weight: normal;
  margin-top: 5px;
  color: gray;
`;
const Price = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 35px;
`;

const Heart = styled.div`
  position: absolute;
  top: 120px;
  right: 5px;
  img {
    width: 15px;
    height: 15px;
  }  
`;

const MyPartOfClass = () => {
  
  const context = useContext(UserContext);
  const { userId } = context;
  
  // 수강 중인 클래스 조회
  const [myClassInfo, setMyClassInfo] = useState("");

  useEffect(() => {
    const myClassInfo = async() => {
      const response = await AxiosApi.myClassGet(userId);
      if(response.status === 200) setMyClassInfo(response.data);
    };
    myClassInfo();
  },[userId]);

   return(
   <>
   <Section1>     
      {myClassInfo.length === 0 ? (
        <div className="no">
        <img src={x} alt="엑스" />
        <p>수강중인 클래스가 없습니다</p>
      </div>
      ) : (myClassInfo.map(myClass => (
        <SectionBox1 key={myClass.num}>
          <div>
            <Heart><div><img src={heart} alt="좋아요" /></div></Heart>
            <Thumbnail imageUrl={myClass.thum}></Thumbnail>
            <Category>{myClass.categoryName}</Category>
            <Title>{myClass.name}</Title>
            <Description>{myClass.intro}</Description>
            <Price>{myClass.price.toLocaleString()}원</Price>
          </div>
        </SectionBox1>
      )))}    
  </Section1>
   </>
   )
}

export default MyPartOfClass;