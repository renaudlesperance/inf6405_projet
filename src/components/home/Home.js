import {Navigate,useNavigate,Redirect} from 'react-router-dom'
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

// Base on user login form from https://github.com/elinsoftware/portal-login-react/tree/master/src 

import './Home.css';

function LoginForm() {
    // User Login info
    const UserDatabase = [
      {
        username: "MasterGardener",
        password: "GrowGrowGrow!"
      },
      {
        username: "PlantSupervisor",
        password: "ISeeEverything"
      }
    ];

    const navigate = useNavigate()
    
    const [showPass, setShowPass] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const AlertDismissible = () => {
        if (showPass) {
          return (
            <div className="alert" id="button">            
            <Alert>
              {"Mot de passe incorrect "}
              <button onClick={() => setShowPass(false)}> x </button>
            </Alert>
            </div>
          );
        }
        else if (showUser){
          return(
            <div className="alert" id="button">            
            <Alert>
              {"Nom d'utilisateur introuvable "}
              <button onClick={() => setShowUser(false)}> x </button>
            </Alert>
            </div>
          );
        }
      }

    const onSubmit = (evt) => {
      evt.preventDefault()
      var nameValue = document.getElementById("name").value;
      var passValue = document.getElementById("pass").value;

      // Find user login info
      const userData = UserDatabase.find((user) => user.username === nameValue);

      // Compare user info
      if (userData) {
        if (userData.password !== passValue) {
          // Invalid password
          setShowPass(true)
        } else {
          navigate('/GreenHouseMap');
        }
      } else {
        // Username not found
        setShowUser(true)
      }
    }


    return (
      <form id="loginform" onSubmit={onSubmit}>
        <FormHeader title="Bienvenue sur Smart Green House" />
        <AlertDismissible />
        <Form />
        <OtherMethods />
      </form>
    );
}

const FormHeader = ({ title }) => (
    <h2 id="headerTitle">{title}</h2>
);


const Form = () => (
   <div>
     <FormInput description="Nom d'utilisateur" placeholder="Entrez votre nom d'utilisateur" type="text" id='name' />
     <FormInput description="Mot de passe" placeholder="Entrez votre mot de passe" type="password" id='pass' />
     <FormButton title="Se connecter"/>
   </div>
);

const FormButton = ({ title }) => {
  return (
    <div id="button" className="row">
      <button type='submit'>
        {title}</button>
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
  <div>  
  <LoginForm />
  </div>

  );
}
export default Home;