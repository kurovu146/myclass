import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.scss";

function Register() {
  let navigate = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    repass: "Password not matched!"
  };

  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();

    var { pass, repass } = document.forms[0];

    if (pass.value !== repass.value) {
      setErrorMessages({name: 'repass', message: errors.repass});
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Re-Password </label>
          <input type="password" name="repass" required />
          {renderErrorMessage("repass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">REGISTER</div>
        {isSubmitted ? <div>User is successfully registed!</div> : renderForm}
      </div>
    </div>
  );
}

export default Register;