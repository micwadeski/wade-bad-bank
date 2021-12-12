import React from "react";
import {UserContext, Card, Click} from './context'

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
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

  function handleChangeName(e) {
    setName(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleChangePassword(e) {
    setPassword(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleCreate(){
    console.log(name,email,password); // troubleshooting purposes
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (password.length < 8) {
      validate(false, "Password must be more than 8 characters");
      clearForm();
      return;
  }
  const url = `/account/create/${name}/${email}/${password}`;
  (async () => {
      var res  = await fetch(url);
      var data = await res.json();    
      console.log(data);        
  })();
  
  setShow(false);
  }    

  function clearForm(){ // will simply clear all the values
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setDisabled(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input 
                type="input" 
                className="form-control" 
                id="name" 
                placeholder="Enter name" 
                value={name} 
                onChange={handleChangeName} 
              /><br/>
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
                text="Create Account"
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

export default CreateAccount;
