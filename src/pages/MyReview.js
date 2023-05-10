import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";


const Head = styled.div`
  margin-bottom: 50px;
  p {
    font-size: 1.3em;
    font-weight: bold;
  }

`;

const SectionBox = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  font-weight: bold;
  gap: 60px;
  margin-bottom: 100px;
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
    border: 1px solid lightgray;
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
`;

const MyReview = () => {

  const context = useContext(UserContext);
  const { userId, password} = context;

  // 작성 후기 조회
  const [myReviewInfo, setMyReviewInfo] = useState("");
  // 작성 가능한 후기 조회
  const [myWriteInfo, setMyWriteInfo] = useState("");

  useEffect(() => {
    const myReviewInfo = async() => {
      const response = await AxiosApi.myReviewGet(userId);
      if(response.status === 200) setMyReviewInfo(response.data);
    };
    myReviewInfo();
  }, []);

  useEffect(() => {
    const myWriteInfo = async() => {
      const response = await AxiosApi.myWriteGet(userId);
      if(response.status === 200) setMyWriteInfo(response.data);
    };
    myWriteInfo();
  }, []);

  return(
    <>
    <Container>
    <Head>
    <p>작성한 후기</p>
    </Head>
    <SectionBox>
    {myReviewInfo && myReviewInfo.map(myReview => (
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
      <button>수정하기</button>
    </div>
    ))}
    </SectionBox>
    <Head>
      <p>작성 가능한 후기</p>
    </Head>
    <SectionBox>
    {myWriteInfo && myWriteInfo.map(myWrite => (
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
        <button>후기 작성</button>
      </div>
    </div>
    ))}
    </SectionBox>
    </Container>
    </>
  )
}

export default MyReview;