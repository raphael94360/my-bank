
const Accounts = (props) => {

  return(
    <>
      
      <div className="accounts" style={props.accounts.name === "Courant" ? {backgroundColor:props.accounts.color} : {backgroundColor:props.accounts.color}} >
        <h2> {props.accounts.name} </h2>
        <h2> {props.accounts.balance} €</h2>
      </div>

    </>

  )
}

export default Accounts;