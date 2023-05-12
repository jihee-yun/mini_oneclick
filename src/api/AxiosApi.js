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
  // 구독 정보 생성
  subRegister: async(paymentNum, type) => {
    const subscription = {
      paymentNum: paymentNum,
      type_: type
    };
    return await axios.post(KH_DOMAIN + "/subscription", subscription)
  },
  // 구독 정보 조회
  // getSubscription: async(num) => {
  //   return await axios.get(KH_DOMAIN + `subscription?id=${num}`);
  // },

  // 결제 완료
  paymentInsert: async(lectureNum, memberNum, merchant_uid, amount) => {
    const payment = {
      lectureNum: lectureNum,
      memberNum: memberNum,
      created: merchant_uid,
      amount: amount 
      // 추가해줘
    };
    return await axios.post(KH_DOMAIN + "/payment", payment);
  },
  
};
  
export default AxiosApi;