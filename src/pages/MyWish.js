import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import heart from "../images/redheart.png";
import x from "../images/x.png"

const Container = styled.div`
  font-weight: bold;
  font-size: 1.3em;
  
  .head {
    margin-bottom: 50px;
    }
`;

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
    cursor: pointer;
  }
`;

const MyWish = () => {
  // 수강 중인 클래스 조회
  const context = useContext(UserContext);
  const { userId } = context;
  const [myWishInfo, setMyWishInfo] = useState("");

  useEffect(() => {
    const myWishInfo = async() => {
      const response = await AxiosApi.myWishGet(userId);
      if(response.status === 200) setMyWishInfo(response.data);
    };
    myWishInfo();
  },[userId]);

  const cancleWish = async(num, wishNum) => {
    const response = await AxiosApi.deleteWish(num, wishNum);
    console.log(response.data);
    if(response.data === true) {
      const updatedWishList = myWishInfo.filter((wish) => wish.num !== num);
      setMyWishInfo(updatedWishList);
    }
  };

  return(
    <>
    <Container>
      <p className="head">위시리스트</p>
      <Section1>     
      {myWishInfo.length === 0 ? (
        <div className="no">
        <img src={x} alt="엑스" />
        <p>위시리스트 목록이 없습니다</p>
      </div>
      ) : (myWishInfo.map(myWish => (
        <SectionBox1 key={myWish.num}>
          <div>
            <Heart><div><img src={heart} alt="좋아요" onClick={() => cancleWish(myWish.num, myWish.wishNum)} /></div></Heart>
            <Thumbnail imageUrl={myWish.thum}></Thumbnail>
            <Category>{myWish.categoryName}</Category>
            <Title>{myWish.name}</Title>
            <Description>{myWish.intro}</Description>
            <Price>{myWish.price.toLocaleString()}원</Price>
          </div>
        </SectionBox1>
      )))}    
  </Section1>
    </Container>
    </>
  )
}

export default MyWish;