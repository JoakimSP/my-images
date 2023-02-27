import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoginDropdown() {
    const [toggleDropdown, setDropdown] = useState(false)

    useEffect(() => {
        document.addEventListener('mousedown', hideDropdown)
    })

    function hideDropdown() {
        setDropdown(false)
    }

    function showDropdown() {
        setDropdown(true)
    }
    return (
        <>

             <button onClick={showDropdown} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <Image className="w-8 h-8 rounded-full" loader={() => { "http://placekitten.com/g/200/300" }} src="http://placekitten.com/g/200/300" alt="user photo" width={200} height={200} />
            </button>
            <div className={`z-50 absolute top-11 ${toggleDropdown ? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">myPage</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Photos</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                    </li>
                </ul>
            </div>
            
        </>
    )
}
