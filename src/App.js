import './App.css';
import MyEdit from './pages/MyEdit';
import Mypage from './pages/Mypage';
import MyClass from './pages/MyClass';
import Login from './pages/Login';
import Subs from './pages/Subs'; 
import Payment from './pages/Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PayComplite from './pages/PayComplite';
import SignUp from './pages/SignUp';
import UserStore from './context/UserInfo';
// import Home from './pages/home';

function App() {
  return (
   <UserStore>
    <Router>
        <Routes>
          {/* <Route path="/Home" element={<Home />}/> */}
          <Route path="/Login" element={<Login />}/>
          <Route path="/Login/SignUp" element={<SignUp />}/>
          <Route path="/Mypage" element={<Mypage />}/>
          <Route path="/MyEdit" element={<MyEdit />} />
          <Route path="/MyClass" element={<MyClass />} />
          <Route path="/" element={<Login />}/>
          <Route path="/Subs" element={<Subs />}/>
          <Route path="/Payment" element={<Payment />}/>
          <Route path="/PayComplite" element={<PayComplite />}/>
          
        </Routes>
      </Router>
   </UserStore>
  );
}

export default App;
