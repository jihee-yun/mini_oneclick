import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

const SideBar = styled.div`
  display: flex;
  float: right;
  margin-right: 50px;
  flex-direction: column;
  gap: 10px;
  
  h3 {
    margin-left: 0;
  }
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
`;

const Thum = styled.div`
  margin-right: 10px;
  width: 100px;
  height: 60px;
  border: 1px solid pink;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Category = styled.div`
  font-size: 0.6rem;
  color: gray;
`;

const Name = styled.div`
  font-size: 0.8rem;
`;


const Sidebar = () => {
  const [topLectuer, setTopLectuer] = useState("");

  useEffect(() => {
    const topLectuer = async() => {
      const rsp = await AxiosApi.likeCountGet("ALL");
      if(rsp.status === 200) setTopLectuer(rsp.data);
    };
    topLectuer();
  }, []);

  return(
    <>
    <SideBar>
      <h3>Top 10 Class</h3>
      {topLectuer && topLectuer.map(lecture => (
        <TopBox key={lecture.num}>
            <Thum><div><img src={lecture.thum} alt="썸네일" /></div></Thum>
            <InfoBox>
              <Category>{lecture.category}</Category>
              <Name>{lecture.name}</Name>
            </InfoBox>
        </TopBox>
      ))}

    </SideBar>
    </>
  );
};

export default Sidebar;