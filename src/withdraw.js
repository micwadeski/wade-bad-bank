import React from "react";
import { UserContext, Card, Money, Click } from "./context";

function Withdraw(){
  const ctx = React.useContext(UserContext);
  const currentUser =  ctx.currentUser;
  const [balance, setBalance] = React.useState(currentUser? currentUser.balance : null);

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function clearForm() {
    setAmount('');
    setDisabled(true);
    setShow(true);
  }

  function handleChange(e) {
    setAmount(e.currentTarget.value);
    setDisabled(!e.currentTarget.value);
  }

  function handleCreate() {
    console.log(amount);
    if (!validate(amount,     '0'))     return;
    if (amount <= 0) {
      validate(false, "Invalid Withdraw amount");
      clearForm();
      return;
    }
    if (isNaN(amount)) {
      validate(false, "Value must be a number");
      clearForm();
      return;
    }
    if(!validate(amount)) return;
    currentUser.balance -= Number(amount);
    setBalance(currentUser.balance);
    //currentUser.transactions.push({date: Date(), type: "withdraw", amount: Number(amount)});
  

  fetch(`/account/update/${currentUser.email}/-${amount}`)
  .then(response => console.log(response));

alert('Withdraw was received successfully');
clearForm();
}

  
  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? (
      <>
          <h3>Balance ${(balance? balance : "?")}</h3>
          <br />
        Withdraw Amount
        <br />
        
        <Money
          onChange={handleChange}
          placeholder="Enter withdraw amount"             
        />
                                   
        <Click
           text="Submit"
           disabled={disabled}
           variant="primary"
           onClick={handleCreate}
           className="btn btn-outline-light"
          />
      </>
):(
    <>
      <h3>Balance ${ctx.currentUser.balance.toFixed(2)}</h3>
      <br />
      <h6>Your account has been updated!</h6>
      <Click
        text="Start Another Transaction"
        className="btn btn-success"
        onClick={clearForm}
      />
    </>

)}
/>
  )
}

export default Withdraw;
