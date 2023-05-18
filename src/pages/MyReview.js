import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import { Link } from "react-router-dom";
import down from "../images/arrow-down.png"
import x from "../images/x.png"

const Head = styled.div`
  margin-bottom: 50px;
  p {
    font-size: 1.3em;
    font-weight: bold;
  }

`;

const SectionBox = styled.div`
  height: 300px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  font-weight: bold;
  gap: 50px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  

  h1 {
    margin-bottom: 50px;
  }

  .containerbox {
    display: flex;
    flex-direction: row;
  }
  .reviewbox {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 15px;

    width: 380px;
    height: 150px;
    border: 1px solid #D7D6D6;
    border-radius: 5px;
    margin-bottom: 50px;
  }

  .reviewhead {
    display: flex;
  }
  img {
    width: 70px;
    height: 70px;
  }

  .title {
    width: 75%;
    height: 70px;
    font-size: 0.8em;
    font-weight: bold;
    margin-left: 10px;
    p {
      &:nth-child(2) {
       position: absolute;
       top: 63px;
       font-size: 0.6em;
       color: darkgray;
      }
    }
  }

  .contents {
    margin-top: 10px;
    font-size: 0.7em;
    color: darkgray;
  }

  hr {
    background-color: lightgray;
    border: .3px solid lightgray;
  }
  
  button {
    position: absolute;
    bottom: 10px;
    right: 15px;
    /* border: none; */
    border: 1px solid lightgray;
    border-radius: 2px;
    width: 15%;
    background-color: white;
    color: darkgray;
    font-size: 0.7em;
    &:hover {
      background-color: lightgray;
      color: white;
      cursor: pointer;
    }
  }

  .buttonbox {
    margin-top: 10px;

    hr {
      background-color: lightgray;
      border: .3px solid lightgray;
    }
    button {
      bottom: 15px;
      width: 93%;
      height: 30px;
      background-color: #FC7373;
      border: none;
      color: white;
      font-weight: bold;
      &:hover {
        background-color: lightgray;
      }
    }
  }

  .no {
    width: 100%;
    text-align: center;
    margin: auto 0;
    font-size: 1em;
    color: darkgray;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const MoreContainer = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 100px;

    .moreBox {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
    }

    img {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    p {
      font-size: 0.7em;
      color: darkgray;
      font-weight: bold;
      margin-bottom: 0;
      cursor: pointer;
    }
`;

const MyReview = () => {

  const context = useContext(UserContext);
  const { userId } = context;

  // 작성 후기 조회
  const [myReviewInfo, setMyReviewInfo] = useState("");
  // 작성 가능한 후기 조회
  const [myWriteInfo, setMyWriteInfo] = useState("");
  // 강의 번호
  const [lectureId, setLectureId] = useState("");
  
  // 더보기 기능
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);
  const [startIndex2, setStartIndex2] = useState(0);
  const [endIndex2, setEndIndex2] = useState(2);

  useEffect(() => {
    const myReviewInfo = async() => {
      const response = await AxiosApi.myReviewGet(userId);
      if(response.status === 200) setMyReviewInfo(response.data);
    };
    myReviewInfo();
  }, [userId]);

  useEffect(() => {
    const myWriteInfo = async() => {
      const response = await AxiosApi.myWriteGet(userId);
      if(response.status === 200) setMyWriteInfo(response.data);
    };
    myWriteInfo();
  }, [userId]);


  const sendLecture = (lectureId) => {
    setLectureId(lectureId);
    console.log(lectureId);
  }

  const clickMore = () => {
    setEndIndex(endIndex + 2);
  }
  const clickMore2 = () => {
    setEndIndex2(endIndex2 + 2);
  }

  return(
    <>
    <Container>
    <Head>
    <p>작성한 후기</p>
    </Head>
    <SectionBox>
    {myReviewInfo.length === 0 ? (
       <div className="no">
       <img src={x} alt="엑스" />
       <p>작성한 후기가 없습니다</p>
     </div>
    ) : (myReviewInfo.slice(startIndex, endIndex).map(myReview => (
    <div className="reviewbox" key={myReview.num}>
      <div className="reviewhead">
        <img src={myReview.thum} alt="강의이미지" />
        <div className="title">
          <p>{myReview.title}
           {/** 제목은 60자까지만 가능 */}
          </p>
          <p>{myReview.created}(작성일)</p>
        </div>
      </div>
      <div className="contents">
        <hr />
        <p>{myReview.content} {/** 100자까지..? */}
        </p>
      </div>
      <Link to={`/MyUpdateReview/${myReview.lnum}/${myReview.num}`} style={{ textDecoration: "none", color: "inherit"}}>
      <button>수정하기</button>
      </Link>
    </div>
    )))}
    </SectionBox>
    <MoreContainer>
     {endIndex < myReviewInfo.length && 
      <div className="moreBox" onClick={clickMore}>
      <p>더보기</p>
      <img src={down} alt="더보기"/>
      </div>
      }
    </MoreContainer>
    <Head>
      <p>작성 가능한 후기</p>
    </Head>
    <SectionBox>
    {myWriteInfo.length === 0 ? (
      <div className="no">
      <img src={x} alt="엑스" />
      <p>작성 가능한 후기가 없습니다</p>
    </div>
    ) : (myWriteInfo.slice(startIndex2, endIndex2).map(myWrite => (
    <div className="reviewbox" key={myWrite.myLectureNum}>
      <div className="reviewhead">
      <img src={myWrite.thum} alt="강의이미지" />
        <div className="title">
          <p>{myWrite.title}</p>
          <p>{myWrite.classDay}(수강일)</p>
        </div>
      </div>
      <div className="buttonbox">
        <hr />
        <Link to={`/MyWriteReview/${myWrite.lnum}`} style={{ textDecoration: "none", color: "inherit"}}>
        <button onClick={() => sendLecture(myWrite.lnum)}>후기 작성</button>
        </Link>
      </div>
    </div>
    )))}
    </SectionBox>
    <MoreContainer>
     {endIndex2 < myWriteInfo.length && 
      <div className="moreBox" onClick={clickMore2}>
      <p>더보기</p>
      <img src={down} alt="더보기"/>
      </div>
      }
    </MoreContainer>
    </Container>
    </>
  )
}

export default MyReview;