
const Account = (props) => {

  return(
    
    <>
      <div className="account">

      <div className="items">
        <span> {props.account.date} </span>
        <span> {props.account.description} </span>
        <span> {props.account.amount} € </span>
      </div> 

      </div>
    
    </>


  )
}

export default Account;