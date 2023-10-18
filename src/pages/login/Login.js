import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
// import Header from '../../header/Header';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import Button from "@mui/material-next/Button";

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [show, setShow] = useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setShow({ ...show, showPassword: !show.showPassword });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const loginRes = await axios.post(
        "https://evangadi-forum-api-cgnt.onrender.com/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(loginRes);

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      // set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);
      // navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <>
      <div className="login">
        <div className="login-wrapper">
          <div className="left-wrapper">
            <div className="login-description">
              <h3>Login to your account</h3>
              <p>
                Don't have an account?
                <Link to="/signup">Create a new account</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="emailInput">
                <TextField
                  placeholder="Your Email"
                  name="email"
                  onChange={handleChange}
                  className="email"
                />
              </div>
              <div>
                <TextField
                  placeholder="Your Password"
                  name="password"
                  onChange={handleChange}
                  className="passsword"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {show.showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <br />
              {/* <Button /> */}
              <div className="loginButton">
                <button type="submit">Submit</button> <br />
                <Link to="/signup">Create a new account</Link>
              </div>
            </form>
          </div>
          <div className="Right-wrapper">
            <div className="right-description">
              <h3>About</h3>

              <h2>Evangadi Networks Q&A</h2>
              <p className="fw-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quia, odio iure accusantium laborum exercitationem? Mollitia,
                repellat voluptatibus? Totam nesciunt doloremque ipsum itaque!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ipsum blanditiis earum nesciunt doloremque qui asperiores! Ab
                quos consequatur odit doloremque eius deleniti, veritatis.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                rerum quasi dolore quos, voluptatibus unde nesciunt ullam ut at
                rem sint possimus omnis, error iure corporis ducimus?
              </p>
              <div className="buttonDescription">
                <button>HOW IT WORKS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
