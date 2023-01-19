import { useState } from "react"

export default function DropDown() {
    const [menyState, setMenyState] = useState(false)

    function ShowDropDown() {
        setMenyState(prevState => true)
    
      }
      function HideDropDown() {
        setMenyState(prevState => false)
    
      }
  return (
    <>
    <button onClick={ShowDropDown} onMouseLeave={HideDropDown} on className="w-44 text-white bg-darkTheme hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-l-lg rounded-r-lg md:rounded-r-none text-md px-4 py-2.5 text-center flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Category
          <img src='arrow.svg' className="w-5 ml-14"/>
        </button>
        {menyState &&
          <div class="z-10  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
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
        </>
  )
}
