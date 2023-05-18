import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async(id, pw) => {
    const login = {
      id : id,
      pwd : pw
    };
    return await axios.post(KH_DOMAIN + "/login", login);
  },
  // 회원 조회
  memberGet: async(id) => {
    return await axios.get(KH_DOMAIN + `/member?id=${id}`); // 리퀘스트 파라미터 키와 밸류
  },
  // 회원 가입 여부 확인
  memberRegCheck : async(id) => {
    return await axios.get(KH_DOMAIN + `/check?id=${id}`);
  },
  // 회원 가입
  memberReg : async(id, pwd, name, email) => {
      const member ={
          id : id,
          pwd: pwd,
          name: name,
          mail: email
      };
      return await axios.post(KH_DOMAIN + "/new", member);
  },
  // 회원 탈퇴
  deleteMem: async(id) => {
    const del = {
      id : id
    }
    return await axios.post(KH_DOMAIN + "/del", del);
  },

  // 강의 상세 설명 페이지
  viewLecture: async(lectureNum, category) => {
    console.log("viewLecture 메소드 호출" + category + lectureNum);
    return await axios.get(KH_DOMAIN + `/class?category=${category}&lectureNum=${lectureNum}`);
  },

  // 리뷰 불러오기
  viewList: async(review) => {
    console.log("loadReviewList 호출 : " + review);
    return await axios.get(KH_DOMAIN + `/class/loadReview?num=${review}`)
  },

  // 리뷰 작성
  reviewWrite: async(num, lecNum, memNum, title, content, img) => {
    const reviewData = {
      num : num,
      lecNum : lecNum,
      memNum : memNum,
      title : title,
      content : content,
      img : img
    }
    return await axios.post(KH_DOMAIN + "/class/reviewWrite", reviewData);
  }
};
  
export default AxiosApi;