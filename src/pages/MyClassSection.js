import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import heart from "../images/whiteheart.png";
import redheart from "../images/redheart.png";
import leftarrow from "../images/left-arrow.png";
import rightarrow from "../images/right-arrow.png";
import x from "../images/x.png"
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";


const Container = styled.div` 
  width: 100%;
  position: relative;
  font-weight: bold;
  font-size: 1.3em;

  .top {
    /* align-items: center; */
  }
  
  .head {
    margin-bottom: 50px;
    }

  .arrow {
    position: absolute;
    top: 60px;
    right: 0px;
    float: right;
    /* margin-right: 30px; */
    img {
      padding: 5px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }
  .arrow2 {
    position: absolute;
    bottom: 410px;
    right: 0px;
    float: right;
    /* margin-right: 30px; */
    img {
      padding: 5px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }

  .no {
    width: 100%;
    text-align: center;
    margin: auto 0;
    font-size: 0.6em;
    color: darkgray;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  transition: 0.5s;
`;

const Section1 = styled.div`
  height: 400px;
  display: flex;
  justify-content: left;
  overflow-x: hidden;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.3em;
  gap: 90px;
`;

const SectionBox1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 290px;
  box-sizing: border-box;
  /* border: 1px solid lightgray; */
  margin-bottom: 30px;
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
  cursor: pointer;
  position: absolute;
  top: 120px;
  right: 5px;
  img {
    width: 15px;
    height: 15px;
  }  
`;

const Section2 = styled.div`
  height: 400px;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.3em;
  gap: 30px;
`;

const SectionBox2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 290px;
  /* border: 1px solid lightgray; */
  margin-bottom: 50px;
`;



const MyClassSection = () => {
  const context = useContext(UserContext);
  const { userId} = context;

  // 슬라이드 구현
  // const [slideIndex1, setSlideIndex1] = useState(0);
  // const [slideIndex2, setSlideIndex2] = useState(0);

  // 클래스, 위시리스트 정보 받아오기
  const [myClassInfo, setMyClassInfo] = useState("");
  const [myWishInfo, setMyWishInfo] = useState("");
  
  //
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [startIndex2, setStartIndex2] = useState(0);
  const [endIndex2, setEndIndex2] = useState(3);

  useEffect(() => {
    const myClassInfo = async() => {
      const response = await AxiosApi.myClassGet(userId);
      if(response.status === 200) setMyClassInfo(response.data);
    };
    myClassInfo();
  },[userId]);

  useEffect(() => {
    const myWishInfo = async() => {
      const response = await AxiosApi.myWishGet(userId);
      if(response.status === 200) setMyWishInfo(response.data);
    };
    myWishInfo();
  },[userId]);

  // 위시리스트 취소
  const cancleWish = async(num) => {
    const response = await AxiosApi.deleteWish(num);
    console.log(response.data);
    if(response.data === true) {
      const updatedWishList = myWishInfo.filter((wish) => wish.num !== num);
      setMyWishInfo(updatedWishList);
    }
  };

  // 슬라이드 이전, 다음 버튼 구현
  const prevClick = () => {
    // setSlideIndex1(slideIndex1 - 1);
    if (startIndex > 0) {
      
      setStartIndex(startIndex - 3)
      setEndIndex(endIndex - 3);
    }
  };
  
  const nextClick = () => {
    // setSlideIndex1(slideIndex1 + 1);
    if(endIndex < myClassInfo.length) {
    
    setStartIndex(startIndex + 3)
    setEndIndex(endIndex + 3);
  }
    // if (slideIndex1 < myClassInfo.length - 1) {
    //   setSlideIndex1(slideIndex1 + 1);
    // }
  };

  const prevClick2 = () => {
      if (startIndex2 > 0) {
      
      setStartIndex2(startIndex2 - 3)
      setEndIndex2(endIndex2 - 3);
    }
  };
  
  const nextClick2 = () => {
    if(endIndex2 < myWishInfo.length) {
    
      setStartIndex2(startIndex2 + 3)
      setEndIndex2(endIndex2 + 3);
    }
  };


  return(
    <>
    <Container>
      <div>
        <p className="head">수강 중인 클래스</p>
        {myClassInfo.length !== 0 && (
        <div className="arrow">
          <img src={leftarrow} alt="이전" onClick={prevClick}/>
          <img src={rightarrow} alt="다음" onClick={nextClick}/>
        </div>
        )}
      <Section1> 
      {/* <Slider style={{
        transform: `translateX(-${slideIndex1 * 27}`}}>    */}
      {myClassInfo.length === 0 ? (
        <div className="no">
          <img src={x} alt="엑스" />
          <p>수강중인 클래스가 없습니다</p>
        </div>
      ) : (myClassInfo.slice(startIndex, endIndex).map(myClass => (
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
      {/* </Slider>     */}
  </Section1>
  <p className="head">위시리스트</p>
  {myWishInfo.length !== 0 && (
  <div className="arrow2">
          <img src={leftarrow} alt="이전" onClick={prevClick2}/>
          <img src={rightarrow} alt="다음" onClick={nextClick2}/>
  </div>
  )}
  <Section2>     
  {/* <Slider style={{
      transform: `translateX(-${slideIndex2 * 270}px)`}}> */}
      {myWishInfo.length === 0 ? (
        <div className="no">
          <img src={x} alt="엑스" />
          <p>위시리스트 목록이 없습니다</p>
        </div>
      ) : (myWishInfo.slice(startIndex2, endIndex2).map(myWish => (
        <SectionBox2 key={myWish.num}>
          <div>
            <Heart><div><img src={redheart} alt="좋아요" onClick={() => cancleWish(myWish.num)} /></div></Heart>
            <Thumbnail imageUrl={myWish.thum}></Thumbnail>
            <Category>{myWish.categoryName}</Category>
            <Title>{myWish.name}</Title>
            <Description>{myWish.intro}</Description>
            <Price>{myWish.price.toLocaleString()}원</Price>
          </div>
        </SectionBox2>
      )))}    
      {/* </Slider> */}
  </Section2>
  </div>
  </Container>
    </>
  );
};

export default MyClassSection;