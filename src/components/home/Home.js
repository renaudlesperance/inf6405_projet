import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import styles from './Home.module.css'

// Based on user login form from https://github.com/elinsoftware/portal-login-react/tree/master/src

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
            <Alert variant="danger"  dismissible onClose={() => setShowPass(false)}>
              <span>Le mot de passe saisit est incorrect</span>
            </Alert>
          );
        }
        else if (showUser){
          return(
            <Alert variant="danger"  dismissible onClose={() => setShowUser(false)}>
              <span>Le nom d'utilisateur est incorrect</span>
            </Alert>
          );
        }
      }

    const onSubmit = (evt) => {
      evt.preventDefault()
      setShowPass(false)
      setShowUser(false)
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
      <form id={styles.loginform} onSubmit={onSubmit}>
        <FormHeader title="Bienvenue sur Smart Greenhouse" />
        <AlertDismissible />
        <Form />
        <OtherMethods />
      </form>
    );
}

const FormHeader = ({ title }) => (
    <h2 id={styles.headerTitle}>{title}</h2>
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
    <div id={styles.button} className={styles.row}>
      <button type='submit'>
        {title}</button>
    </div>
  )
};

const FormInput = ({ id, type, placeholder, description }) => (
  <div className={styles.row}>
    <label>{description}</label>
    <input id={id} type={type} placeholder={placeholder}/>
  </div>
);

const OtherMethods = () => (
  <div>
    <label>Or sign in with:</label>
    <div id={styles.iconGroup}>
      <Facebook />
      <Google />
    </div>
  </div>
);

const Facebook = () => (
  <a href="#" id={styles.facebookIcon}></a>
);

const Google = () => (
  <a href="#" id={styles.googleIcon}></a>
);

function Home() {
  return (
  <div className={styles.loginContainer}>
    <LoginForm />
  </div>

  );
}
export default Home;
