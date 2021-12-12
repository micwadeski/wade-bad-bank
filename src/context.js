import React from 'react';
import { HashRouter as hashrouter, Route as route , NavLink as navlink} from 'react-router-dom';

const Route       = route;
const NavLink     = navlink;
const HashRouter  = hashrouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={props.style? props.style : {maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus' style={{color: 'red', background: 'white', marginTop: '10px'}}>{props.status}</div>)}
        </div>
      </div>      
    );    
}

function Click({onClick, disabled, variant, text, className}) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >{text}</button>
  )
}

function Money({onChange, placeholder}) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">$</span>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={onChange} placeholder={placeholder} />
      <span className="input-group-text">.00</span>
    </div>
  )
}

function Icon() {
  return (
    <img src="bank-green.svg" width="35px" className="img-fluid" alt="Responsive image"/>
  )
}

export {Route, NavLink, HashRouter, UserContext, Card, Click, Money, Icon};