import React from "react";
import {UserContext, Card, Click} from './context'

function Login(){
  const ctx = React.useContext(UserContext);
  let currentUser =  ctx.currentUser;
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  function validate(field, label){ // this is only checking for an empty field.
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleChangeEmail(e) {
    setEmail(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleChangePassword(e) {
    setPassword(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleCreate(){
    console.log(email,password); // troubleshooting purposes
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (password.length < 8) {
      validate(false, "Password must be more than 8 characters");
      clearForm();
      return;
  }
  fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            console.log('JSON:', data);
            currentUser = data;
            ctx.currentUser = currentUser;
            setShow(false);
        } catch(err) {
            alert(text);
            console.log('err:', text);
        }
    });
  }    

  function clearForm(){ // will simply clear all the values
    setEmail('');
    setPassword('');
    setShow(true);
    setDisabled(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={show ? (  
              <>
             
              Email address<br/>
              <input 
                type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={handleChangeEmail}
              /><br/>
              Password<br/>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={handleChangePassword}
              /><br/>
              <Click
                text="Login"
                disabled={disabled}
                variant="primary"
                onClick={handleCreate}
                className="btn btn-outline-light"
              />
              </>
            ):(
              <>
              <h5>Success</h5>
              <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

export default Login;
