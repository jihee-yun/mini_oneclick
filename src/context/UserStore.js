import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [memberNum, setMemberNum] = useState("");
    const [lecturenum, setLectureNUm] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    
    const [categoryNum, setCategoryNum] = useState("");
    const [lectureNum, setLectureNum] = useState("");

    return(
        <UserContext.Provider value = {{userName, setUserName, phone, setPhone, mail, setMail,
            memberNum, setMemberNum, lecturenum, setLectureNUm, userId, setUserId, isLogin, setIsLogin,
            categoryNum, setCategoryNum, lectureNum, setLectureNum}}>
            {props.children}
        </UserContext.Provider> 
    );
};
export default UserStore;