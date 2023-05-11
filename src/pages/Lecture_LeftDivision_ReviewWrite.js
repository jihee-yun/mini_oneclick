import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../utils/Modal"

const Container = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 100%;
`
const ReviewList = styled.div`
  width: 100%;
  display:flex;
  flex-wrap:nowrap;
`
const ReviewPhoto = styled.div`
  display:flex;
  justify-content:center;
  width: 41.5%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    overflow:hidden;
  }
  .noimg {
    display:flex;
    justify-content:center;
    align-items:center;
  }
`
const WriteContain = styled.div`
  width: 60%;
  display: flex;
  flex-direction:column;
  textarea {
    border-radius: 5px;
    padding: 10px;
    word-break: break-all;
    word-wrap: break-word;
    resize: none;
    
    margin: 5px auto;
    width:90%;

  }
  .title {
    height: 30px;
  }
  .desc {
    display:flex;
    flex-grow: 1;
    height: 45%;
    min-height: 20%;
  }
`
const ReviewButton = styled.div`

  // 스타일 때문에 딴 곳에 숨겨뒀음
  .filebox input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
  }

  .filebox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  input[type="submit"],
  .uploadBtn,
  button {
    display:inline-flex;
    border: .5px solid black;
    border-radius: 5px;
    width: 15%;
    height: 21px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: darkgray;
    font-size: 0.7em;
    margin-right: 1%;
    &:hover {
      background-color: lightgray;
      color: white;
      cursor: pointer;
    }
  }
`
const ReviewWrite = () => {
  const [uploadIMG, setUploadIMG] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith('image/')) {
      setUploadIMG(file);
    } else {
      alert('이미지 파일만 업로드 가능합니다.');
    }
  }
  const deletePhoto = () => {
    setUploadIMG(null);
    setModalImg(null);
  }

  const openModal = () => {
    if(modalImg) setModalOpen(true);
    else setModalOpen(false);
  }
  const closeModal = () => {
    setModalOpen(false);
  } 

  useEffect(() => {
    if(uploadIMG) {
      setModalImg(<img src={URL.createObjectURL(uploadIMG)} alt="첨부이미지" />)
    }
  },[uploadIMG])
  
  return (
    <Container>
    <form action="" method="post" onSubmit={(e)=>{e.preventDefault()}}>
      <ReviewList>
        <ReviewPhoto onClick={openModal}>
          {uploadIMG 
          ? <img src={URL.createObjectURL(uploadIMG)} alt="첨부이미지"/> 
          : <div className="noimg">사진을 선택해 주세요</div>
          }
        </ReviewPhoto>
        <WriteContain>
          <textarea className="title" placeholder="제목을 입력하세요."></textarea>
          <textarea className="desc" placeholder="내용을 입력하세요."></textarea>
        </WriteContain>
      </ReviewList>
      <ReviewButton>
        <div class="filebox">
          <button onClick={deletePhoto}>파일삭제</button>
          <label className="uploadBtn" for="file" htmlFor="file-input">파일찾기</label> 
          <input type="file" id="file-input" accept="image/*" onChange={uploadPhoto}/>
          <input type="submit" value="작성하기" />
        </div>
      </ReviewButton>
    </form>
    <Modal open={modalOpen} type={false} close={closeModal} header="이미지 크게보기" children={uploadIMG}
       alt="첨부이미지"/>
  </Container>
  )
}

export default ReviewWrite;