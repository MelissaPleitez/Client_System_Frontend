import React from 'react';
import  LoginForm  from "../components/LoginForm";
import '../assets/login.css';

const Login: React.FC = () => {

    

  return (
    <>
      <div className="login-container">
      <div className="login-subdiv image-side">
        <img src="" alt="Lovebirds illustration" />
        <div className="image-text">
          <h2>Digital Trading Group Of Central America</h2>
          <p>At DTGoCA, we are at the forefront of the cryptocurrency revolution</p>
        </div>
      </div>
      <div className="login-subdiv form-side">
        <LoginForm />
      </div>
    </div>
    </>
  )
}

export default Login