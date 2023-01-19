import Navbarlink from "./Navbar-link"
import LoginButton from "./Login-button"

export default function Navbar() {
  return (
    <div className="sm:grid grid-rows-1 grid-cols-12 items-center pr-9 pl-9 bg-darkTheme">
      <Navbarlink name="Search"/>
      <Navbarlink name="Photos"/>
      <Navbarlink name="How to"/>
      <Navbarlink name="FAQ"/>
      <Navbarlink name="Prices"/>
      <LoginButton/>
    </div>
  )
}
