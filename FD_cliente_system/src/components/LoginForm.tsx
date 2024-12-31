import React, {useEffect, useState} from "react";
import '../assets/css/loginForm.css';
import LoginField from "./LoginField";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import {  userStore } from "../stores/UserStore";


function LoginForm() {
    const [error, setErrors] = useState(userStore.error);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
  
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      userStore.setEmail(value);
      validateEmail(value);
    };
  
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      userStore.setPassword(value);
      validatePassword(value);
    };

    const validateEmail = (email: string) => {
        if (!email) {
            setEmailError("Email cannot be empty");
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Please enter a valid email address");
          } else {
            setEmailError('');
          }
      };
     
    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordError("Password cannot be empty");
          } else {
            setPasswordError('');
          }
    };  

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await userStore.login();
        console.log("Se autentica? : ", userStore.isAuthenticated)
        if (userStore.isAuthenticated) {
          navigate("/main");
        }else {
            setErrors(userStore.error)
            console.log("Hay un error al iniciar")
        }
      };

      useEffect(() => {
        setErrors(userStore.error);
      }, [userStore.error]); 

    const isFormValid = !emailError && !passwordError;

  return (
    <form className="login-form" onSubmit={handleLogin}>
    <h2>Welcome to DTG-ca</h2>
    <LoginField
      type="email"
      placeholder="Email"
      onChange={handleEmail}
      autocomplete="username"
    />
       <ErrorMessage error={emailError} />
    <LoginField
      type="password"
      placeholder="Password"
      onChange={handlePassword}
      autocomplete="current-password"
    />
    <ErrorMessage error={passwordError} />
    <div className="form-actions">
      <button type="submit" disabled={!isFormValid}>
        Sign in
      </button>
    </div>
    <div className="social-login">
    </div>
    <p className="create-account">
    </p>
  </form>
       
                   
  );
}

export default LoginForm;