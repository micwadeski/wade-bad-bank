import { NavLink, Icon } from "./context";

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/" data-toggle="tooltip" title="Home"><Icon /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/CreateAccount/" data-toggle="tooltip" title="Create Account">Create Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login/" data-toggle="tooltip" title="Login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/deposit/" data-toggle="tooltip" title="Deposit">Deposit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/withdraw/" data-toggle="tooltip" title="Withdraw">Withdraw</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/alldata/" data-toggle="tooltip" title="All Accounts">All Accounts</NavLink>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;