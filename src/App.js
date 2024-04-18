import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import SignUp from './signUp'
import Home from './home'
import Login from './login'
import MyProfile from './myProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
