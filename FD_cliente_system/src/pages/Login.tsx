import React from 'react';
import  LoginForm  from "../components/LoginForm";
import '../assets/css/login.css';
import imagen from '../assets/imgs/criptMainImg.jpg';

const Login: React.FC = () => {

    

  return (
    <>
    <div className='mainLogin'>
    <div className="login-container">
      <div className="login-subdiv image-side">
      <div className="image-wrapper">
            <img src={imagen} alt="illustration" className="responsive-img" />
          </div>
        <div className="image-text">
          <h2>Digital Trading Group Of Central America</h2>
          <p>At DTGoCA, we are at the forefront of the cryptocurrency revolution</p>
        </div>
      </div>
      <div className="login-subdiv form-side">
        <LoginForm />
      </div>
    </div>
    </div>
    </>
  )
}

export default Login