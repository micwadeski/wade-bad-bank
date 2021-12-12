
//import './App.css';
import AllData from './alldata'
import CreateAccount from './createaccount'
import Deposit from './deposit'
import Home from './home'
import Login from './login'
import Withdraw from './withdraw'
import NavBar from './navbar';
import {Route, HashRouter} from './context'
import {UserContext} from './context'

function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{currentUser: null, users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, transactions: []}]}}>
        <div className="fixed-container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;
