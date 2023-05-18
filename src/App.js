// import { Route, Routes ,Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserStore from './context/UserInfo';
import Search from './pages/Search';
import Sidebar from './pages/Sidebar';
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';
import TermsOfUse from './pages/TermsOfUse';
import PersonalInfo from "./pages/PersonalInfo"

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Signup' element={<SignUp />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Search/:searchInput' element={<Search />}/>
          <Route path='/Sidebar' element={<Sidebar />}/>
          <Route path='/FindId' element={<FindId />} />
          <Route path='/FindPw' element={<FindPw />} />
          <Route path='/TermsOfUse' element={<TermsOfUse />} />
          <Route path='/PersonalInfo' element={<PersonalInfo />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
