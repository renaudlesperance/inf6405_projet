// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
import {Navigate,useNavigate,Redirect} from 'react-router-dom'

// import "../App.css";

// User login form https://github.com/elinsoftware/portal-login-react/tree/master/src with small modification


import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
// import { Form, Input, Button, Checkbox, message } from "antd";
import loginImg from '../Images/login.png'
import { StepForwardOutlined } from '@ant-design/icons';
import ReactDOM, { version } from 'react-dom'


function LoginForm() {
    const navigate = useNavigate()

    const onSubmit = (evt) => {
      evt.preventDefault()
      var nameValue = document.getElementById("name").value;
      var passValue = document.getElementById("pass").value;

      navigate('/GreenHouseMap')
    }


    return (
      <form id="loginform" onSubmit={onSubmit}>
        <FormHeader title="Bienvenue sur Smart Green House" />
        <Form />
        <OtherMethods />
      </form>
    );
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Nom d'utilisateur" placeholder="Entrez votre nom d'utilisateur" type="text" id='name' />
     <FormInput description="Mot de passe" placeholder="Entrez votre mot de passe" type="password" id='pass' />
     <FormButton title="Se connecter"/>
   </div>
);

// const Login_click = () =>{ useNavigate("/GreenHouseMap");}
// // const Login_click = () => {<Navigate  to="/GreenHouseMap"> </Navigate >}
// // const Login_click = () => {tets}

const FormButton = props => {
  return (
    <div id="button" className="row">
      <button type='submit'>
        {props.title}</button>
    </div>
  )
};

const FormInput = ({ id, type, placeholder, description }) => (
  <div className="row">
    <label>{description}</label>
    <input id={id} type={type} placeholder={placeholder}/>
  </div>
);

const OtherMethods = () => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Google />
    </div>
  </div>
);

const Facebook = () => (
  <a href="#" id="facebookIcon"></a>
);

const Google = () => (
  <a href="#" id="googleIcon"></a>
);


function Home() {
  return (
    <div className="app">
      <LoginForm />
    </div>
  );
}
export default Home;


// User login form strongly inspired by: from https://contactmentor.com/login-form-react-js-code/
// function Home() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Nom d'utilisateur</label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Mot de passe </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="login-button">
//           <button className="login-button" type="submit"> Se connecter </button>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div
//         className="log_title">Bienvenue sur Smart Green House</div>
//         {isSubmitted ? <div>L'utilisateur est connecté avec succès
//         <Navigate  to="/GreenHouseMap"> </Navigate >
//         </div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default Home;
