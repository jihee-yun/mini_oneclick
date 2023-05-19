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
    memberGet : async(id) => {
        return await axios.get(KH_DOMAIN + `/member?id=${id}`);
    },
    // 회원가입 여부 확인
    memberRegCheck: async(id) => {
        return await axios.get(KH_DOMAIN + `/check?id=${id}`);
    },
    // 회원 가입
    memberReg: async(name, email, tel, id, pwd, isTeacher) => {
        const member = {
            name: name,
            mail: email,
            tel : tel,
            id : id,
            pwd: pwd,
            isTeacher : isTeacher
        };
        return await axios.post(KH_DOMAIN + "/new", member);
    },
    // 회원 탈퇴
    memberDel: async(id) => {
        const del = {
            id: id
        };
        return await axios.post(KH_DOMAIN + "/del", del);
    },
    // 베이킹 강의 조회
    bakingGet : async(num) => {
        return await axios.get(KH_DOMAIN + `/baking?num=${num}`);
    },
    // 전체 강의 조회
    lectureGet : async(num) => {
        return await axios.get(KH_DOMAIN + `/lecture?num=${num}`);
    },
    // 좋아요 순으로 강의 조회
    likeCountGet : async(num) => {
        return await axios.get(KH_DOMAIN + `/sidebar?num=${num}`);
    },
    // 좋아요 낮은 순 3개
    downCountGet : async(num) => {
        return await axios.get(KH_DOMAIN + `/down?num=${num}`);
    },
    // 아이디 찾기
    lostIdGet : async(name, mail) => {
        const findId = {
            name : name,
            mail : mail
        }
        return await axios.post(KH_DOMAIN + `/lostId`, findId);
    },
    // 비밀번호 찾기 
    lostPwGet : async(name, id, mail) => {
        const findPw = {
            name : name,
            id : id,
            mail : mail
        }
        return await axios.post(KH_DOMAIN + `/lostPw`, findPw);
    }
};

export default AxiosApi;
