import './App.css';
import MyEdit from './pages/MyEdit';
import Mypage from './pages/Mypage';
import MyClass from './pages/MyClass';
import Login from './pages/Login';
import Lecture from './pages/Lecture';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
        <Routes>
          <Route path="/Mypage" element={<Mypage />}/>
          <Route path="/MyEdit" element={<MyEdit />} />
          <Route path="/MyClass" element={<MyClass />} />
          <Route path="/Class" element={<Lecture/>}/>
          <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
