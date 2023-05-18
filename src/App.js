import './App.css';
import MyEdit from './pages/MyEdit';
import Mypage from './pages/Mypage';
import MyClass from './pages/MyClass';
import Login from './pages/Login';
import Lecture from './pages/Lecture_Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserStore from './context/UserStore';
import {auth} from "./api/firebase"

function App() {

  return (
    
   <UserStore>
   <Router>
      <Routes>
        <Route path="/Mypage" element={<Mypage />}/>
        <Route path="/MyEdit" element={<MyEdit />} />
        <Route path="/MyClass" element={<MyClass />} />
        <Route path="/Class" element={<Lecture/>}/>
        <Route path="/" element={<Login />}/>
      </Routes>
    </Router>
   </UserStore>
  );
}

export default App;
