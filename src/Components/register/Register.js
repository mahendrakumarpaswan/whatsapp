import { React, useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
    designation: "",
    userGroup: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const register = () => {
    const {
      fname,
      email,
      password,
      cpassword,
      mobile,
      designation,
      userGroup,
    } = user;

    if (fname !== "" && email !== "" && password !== "" && cpassword !== "" && mobile !== "" && designation !== "" && userGroup !== "" &&  validateEmail(email) &&  password === cpassword) {
         
      axios.post("http://localhost:8009/subAdminRegister", user).then((res) => {
        console.log(res)
          console.log(res.status);
          if(res.status === 201){
              console.log("")
            navigate("/login")
          }
          alert(res.data.message);
        });

      console.log("Submit......", user);
    } else {
      alert("Please check input field");
    }

  };

  return (
    <>
      <div id="flex">
        <div className="register">
          <h2>Register</h2>
          <input
            type="text"
            name="fname"
            value={user.fname}
            placeholder="Enter Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter Email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter Password"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="cpassword"
            value={user.cpassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            placeholder="Mobile"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="designation"
            value={user.designation}
            placeholder="Enter Designation"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="userGroup"
            value={user.userGroup}
            placeholder="Enter Usergroup"
            onChange={handleChange}
          ></input>
          <div className="button" onClick={register}>
            Register
          </div>
          <div>or</div>
          <div className="button" onClick={() => navigate("/login")}>
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
