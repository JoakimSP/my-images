import { useState, useEffect } from "react"

export default function DropDown() {
  const [menuState, setMenuState] = useState(false)
  const [isRounded, setIsRounded] = useState(true)

  let buttonClass = "rounded-b-lg"

  useEffect(() => {
    document.addEventListener('mousedown', dropDownUIFalse)
  })

  function toggleDropDown() {
    setMenuState(prevState => !prevState)


  }
  function dropDownUIFalse() {
    setMenuState(prevState => false)
  }
  function toggleButtonStyle(){
    setIsRounded(prevState = !prevState)
  }

  return (
    <div className="relative">
      <button onClick={toggleDropDown} className="w-44 text-white bg-darkTheme font-medium rounded-l-lg rounded-r-lg md:rounded-r-none text-md px-4 py-2.5 text-center flex items-center" type="button">
        Category
        <img src='arrow.svg' className="w-5 ml-14" />
      </button>
      {menuState &&
        <div class="bg-darktheme w-44 absolute left-0">
          <ul class="py-1 text-sm text-white bg-darkTheme rounded-b-lg">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}
