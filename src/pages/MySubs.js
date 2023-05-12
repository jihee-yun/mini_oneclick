import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
// import sign from "../images/warning.png";
import MySubsNone from "./MySubsNone";
import MySubsTrue from "./MySubsTrue";


const MySubs = () => {
  const context = useContext(UserContext);
  const { userId, password} = context;

  // 내 구독권 조회
  const [mySubsInfo, setSubsInfo] = useState("");

  useEffect(() => {
    const mySubsInfo = async() => {
      const response = await AxiosApi.memberGet(userId);
      if(response.status === 200) setSubsInfo(response.data);
    };
    mySubsInfo();
  },[]);

  return(
    <>
    {mySubsInfo && mySubsInfo.map(mySubs => (
      <div key={mySubs.id}>
        {/* {mySubs.isSub} */}
        {(mySubs.isSub.trim() === 'Y') ? <MySubsTrue /> : <MySubsNone />}
        </div>
    ))}
    </>
  )
}

export default MySubs;