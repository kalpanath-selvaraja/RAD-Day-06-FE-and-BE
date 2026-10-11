import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../service/auth.ts";



function Login() {

    const navigate = useNavigate();

    const [email, setEmail] =   useState("");
    const [password, setPassword] =   useState("");

    const handleLogin = async () => {
        if(!email || !password){
            return alert("Please fill in all fields.");
        }

        try{
            const res  = await login(email, password)

            const resData  = res.data

            const accessToken = resData.access_token
            const refreshToken = resData.refresh_token;

            if(accessToken && refreshToken){
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);

                window.location.href = "/"

                // navigate("/"); we Don't just navigate. Now refresh it because we want to access the AuthProvider to be rerendered
            }
        }catch(err){
            console.error(err)
            alert("login failed!");
        }
    }
  return (
      <div>
          <h1>Register</h1>



          <input placeholder="Email"
                 value={email}
                 onChange={
                     (e) => setEmail(e.target.value)} />

          <input placeholder="Password"
                 type="password"
                 value={password}
                 onChange={
                     (e) => setPassword(e.target.value)}/>



          <button onClick={handleLogin}>Register</button>
          <p>
              <span>Already ahev an account?</span>
              <button onClick={() => navigate("/login")}>Login</button>

          </p>
      </div>
  )
}

export default Login
