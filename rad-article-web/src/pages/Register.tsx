import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {register} from "../servic/auth.ts";

function Register() {

  const navigate = useNavigate();

  const [name, setName] =   useState("Kalpanath");
  const [email, setEmail] =   useState("");
  const [password, setPassword] =   useState("");

  const handleRegister =  async () => {
    if (!name || !email || !password) {
      return alert("Please fill all fields");
    }

    if (password !== password) {
      return alert("passwords dont match");
    }

    try{
      await register(name, email, password);
    }catch(err){
      console.error(err);
      alert("Register failed.");
    }
  }

  return(
      <div>
        <h1>Register</h1>
        <input placeholder="Name"
               value={name}
               onChange={
          (e) => setName(e.target.value)}/>


        <input placeholder="Email"
               value={email}
               onChange={
          (e) => setEmail(e.target.value)} />

        <input placeholder="Password"
               type="password"
               value={password}
               onChange={
          (e) => setPassword(e.target.value)}/>

        <input placeholder="co_password"  />

        <button onClick={handleRegister}>Register</button>
        <p>
          <span>Already ahev an account?</span>
          <button onClick={() => navigate("/login")}>Login</button>

        </p>
      </div>
  )
}

export default Register
