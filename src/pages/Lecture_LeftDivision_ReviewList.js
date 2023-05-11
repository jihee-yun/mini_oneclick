import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  .containerbox {
    display: flex;
    flex-direction: row;
  }
  .reviewbox {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 15px;

    width: 95%;
    border: 1px solid #D7D6D6;
    border-radius: 5px;
    margin: 10px auto;
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
    width: 100%;
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
`

const ReviewList = () => {

  return (
    <Container>
      <div className="reviewbox">
        <div className="reviewhead">
          <img src="https://cdn.class101.net/images/1dfa3159-518b-43f7-9647-6dc8f53de06d/2048xauto.webp" alt="강의이미지" />
          <div className="title">
            <p>
            {/** 제목은 60자까지만 가능 */}제목 들어가는 부분
            </p>
          </div>
        </div>
        <div className="contents">
          <hr />
          <p>내용들어가는 부분 {/** 100자까지..? */}
          </p>
        </div>
        <button>수정하기</button>
    </div>
  </Container>
  )
}

export default ReviewList;