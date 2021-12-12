import {Card} from './context'

function Home(){
  return (
    <Card
      txtcolor="black"
      header="Bad Bank"
      title="Welcome to the bank"
      text="Use the navigation bar to move throughout your options."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

export default Home;