import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserStore = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  return(
    <UserContext.Provider value={{isLogin, setIsLogin}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;