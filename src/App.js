import './App.scss';
import data from "./assets/accounts.json";
import Header from './components/Header';
import Accounts from './components/Accounts';
import Account from "./components/Account";
import Button from './components/Button';


function App() {

  return (
    <>
      <Header/>
      <div className="container">
        {data.map((accounts, index) => {
          return(
            <section>
              <div className='container-accounts'>
              <Accounts accounts={accounts} key={index}/> 
              {accounts.operations.map((operation, index) => {
                return(
                  <Account account={operation} key={index} />
                )
              })}

              </div>
              <Button children="SEE MORE"/>

            </section>

          )
        })}
      </div>

        
    
    </>


    
  );
}

export default App;
