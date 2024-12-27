import React from "react";
import {  LoginErroMessage } from "../interfaces/LoginPageProps";
import '../assets/css/errorMessage.css';

const ErrorMessage: React.FC<LoginErroMessage> = ({ error })=> {
  return error ? (
    <div className="error-message">
      <p className="error-text">{error}</p>
    </div>
  ) : null;
}

export default ErrorMessage;