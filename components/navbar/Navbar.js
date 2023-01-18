import Navbarlink from "./Navbar-link"
import LoginButton from "./Login-button"

export default function Navbar() {
  return (
    <div className="flex gap-9 items-center pr-9 pl-9 bg-gradient-to-b from-neutral-900 to-slate-600">
      <Navbarlink name="Search"/>
      <Navbarlink name="Photos"/>
      <Navbarlink name="How to"/>
      <Navbarlink name="FAQ"/>
      <Navbarlink name="Prices"/>
      <LoginButton/>
    </div>
  )
}
