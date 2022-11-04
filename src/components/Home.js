import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import bkg_image from "../Images/bkg_image.jpg";
import {Navigate} from 'react-router-dom'

import "../App.css";

// User login form strongly inspired by: from https://contactmentor.com/login-form-react-js-code/


function Home() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Nom d'utilisateur</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="login-button">
          <button className="login-button" type="submit"> Se connecter </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div 
        className="log_title">Bienvenue sur Smart Green House</div>
        {isSubmitted ? <div>L'utilisateur est connecté avec succès
        <Navigate  to="/GreenHouseMap"> </Navigate >
        </div> : renderForm}
      </div>
    </div>
  );
}

export default Home;