import React, {useEffect, useState} from "react";
import '../assets/css/loginForm.css';
import LoginField from "./LoginField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import {  userStore } from "../stores/UserStore";


function LoginForm() {
    const [error, setErrors] = useState(userStore.error);
    const navigate = useNavigate();
  
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      userStore.setEmail(value);
      console.log("correo", value)
    };
  
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      userStore.setPassword(value);
      console.log("password: ",value)
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await userStore.login();
        console.log("Se autentica? : ", userStore.isAuthenticated)
        if (userStore.isAuthenticated) {
          navigate("/main");
          console.log("Se authentica")
        }else {
            setErrors(userStore.error)
            console.log("Hay un error al iniciar")
        }
      };

      useEffect(() => {
        setErrors(userStore.error);
      }, [userStore.error]); 

  return (
    <form className="login-form" onSubmit={handleLogin}>
    <h2>Welcome to DTG-ca</h2>
    <LoginField
      type="email"
      placeholder="Users name or Email"
      onChange={handleEmail}
      icon={"User"}
      autocomplete="username"
    />
    <LoginField
      type="password"
      placeholder="Password"
      onChange={handlePassword}
      icon={"User"}
      autocomplete="current-password"
    />
    <div className="form-actions">
      <button type="submit" disabled={!userStore.email || !userStore.password}>
        Sign in
      </button>
    </div>
    <ErrorMessage error={error} />
    <div className="social-login">
    </div>
    <p className="create-account">
    </p>
  </form>
       
                   
  );
}

export default LoginForm;