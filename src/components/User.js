const User = (props) => {
  return(
    <>
      <div className="identification">
        <h2> {props.user}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-user"
          viewBox="0 0 24 24"
          >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
  
    </>

  )
}

export default User;