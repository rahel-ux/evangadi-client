import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Header from "../../header/Header";
import { TextField } from "@mui/material";
import "./signUp.css";

const SignUp = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // sending data to be registered in database
      await axios.post(
        "https://evangadi-forum-api-cgnt.onrender.com/api/users",
        form
      );

      // once registered the login automatically so send the new user info to be logged in

      const loginRes = await axios.post(
        "https://evangadi-forum-api-cgnt.onrender.com/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      // set the global state with the new user info

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      // set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);
      // navigate user to homepage
      navigate("/");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
      // alert(err.response.data.msg);
    }
  };

  return (
    <div className="signUp">
      <div className="signUp-wrapper">
        <div className="left-wrapper-signUp">
          {/* <form onSubmit={handleSubmit}>
          <label>First Name: </label>
          <input type="text" name="firstName" onChange={handleChange} />
          <br />
          <label>Last Name: </label>
          <input type="text" name="lastName" onChange={handleChange} />
          <br />
          <label>User Name: </label>
          <input type="text" name="userName" onChange={handleChange} />
          <br />
          <label>Email:</label>
          <input type="text" name="email" onChange={handleChange} />
          <br />
          <label>Password: </label>
          <input type="password" name="password" onChange={handleChange} />
          <br />
          <button>submit</button>
        </form> */}
          <h3>Join the network</h3>
          <p>
            <Link to="/login">Already have an account</Link>
          </p>

          <form onSubmit={handleSubmit}>
            {/* <input
                name="email"
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
              ></input> */}

            {/* <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  className="email"
                /> */}
            <div className="emailInput">
              <TextField
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="email"
              />
            </div>
            <div className="firstLast">
              {/* <div className="name"> */}
              <TextField
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                className="firstname"
              />
              {/* </div> */}

              {/* <div> */}
              <TextField
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                className="lastname"
              />
              {/* </div> */}
            </div>

          
            <div className="userName">
              <TextField
                placeholder="User Name"
                name="userName"
                onChange={handleChange}
                className="passsword"
              />
            </div>

            <div className="password">
              <TextField
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="passsword"
              />
            </div>

            <br />
            {/* <Button /> */}
            <div className="loginButton-wrapper">
              <button type="submit">Agree and Join</button> <br />
              <p>
                I agree to the <Link to="/signup">privacy policy</Link> and
                <Link to="/signup"> term service</Link>
              </p>
            </div>
          </form>
          <p>
            <Link to="/login">Already have an account</Link>
          </p>
        </div>
        <div className="Right-wrapper">
          <h3>About</h3>

          <h2>Evangadi Networks Q&A</h2>
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quia, odio iure accusantium laborum exercitationem? Mollitia,
            repellat voluptatibus? Totam nesciunt doloremque ipsum itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            ipsum blanditiis earum nesciunt doloremque qui asperiores! Ab quos
            consequatur odit doloremque eius deleniti, veritatis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas rerum
            quasi dolore quos, voluptatibus unde nesciunt ullam ut at rem sint
            possimus omnis, error iure corporis ducimus?
          </p>
          <div className="buttonDescription">
            <button>HOW IT WORKS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
