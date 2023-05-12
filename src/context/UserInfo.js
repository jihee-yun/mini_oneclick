import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [membernum, setMemberNum] = useState("");
    const [lecturenum, setLectureNUm] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    

    return(
        <UserContext.Provider value = {{userName, setUserName, phone, setPhone, mail, setMail, membernum, setMemberNum, lecturenum, setLectureNUm}}>
            {props.children}
        </UserContext.Provider> 
    );
};
export default UserStore;