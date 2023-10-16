import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
// import Header from "./header/Header";
// import Footer from "./footer/Footer";
import SharedComponents from "./pages/SharedComponents";
import ToAskPage from "./pages/askingPage/ToAskPage";
import Answer from "./pages/answerPage/Answer";
// import { UserProvider } from './context/UserContext';

function App() {
  const [userData, setUserData] = useContext(UserContext);
  // const [askQuestion, setAskQuestion]=useContext(UserContext)
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    // console.log(token);
    // console.log(token)
    if (!token || token === null || token === "") {
      localStorage.setItem('auth-token', '');
      token = "";
    } else {
      console.log(token);
      const userRes = await axios.get(
        "https://evangadi-forum-api-cgnt.onrender.com/api/users",
        {
          headers: { "x-auth-token": token },
        }
      );

      // set the global state with user info
      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.user_name,
        },
      });
    }
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SharedComponents />}>
            <Route path="/" element={<Home logout={logout} />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/toAskPage" element={<ToAskPage />}></Route>
            <Route path="/answer/:postID" element={<Answer />}></Route>
          </Route>

  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
