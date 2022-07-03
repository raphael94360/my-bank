import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return(
    <>
      <header>
        <div className="header">
          <Logo/>
          <User user="Raphaël"/>
        </div>
      </header>

    </>

  )
}

export default Header;