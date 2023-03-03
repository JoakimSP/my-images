import { useState, useRef } from 'react'
import { useRouter } from 'next/router'

export default function Searchbar() {
    const [toggleClassName, setClassName] = useState(false)
    const [cat, setCat] = useState("All Categories")
    const query = useRef()
    const router = useRouter()
    function updateCategory(event) {
        const text = event.target.textContent
        setCat(text)
    }

    async function queryDataBase(e) {
        e.preventDefault()
        const catString = cat
        const queryString = query.current.value
        try {
            const respons = await fetch('api/queryImages', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ category: catString, query: queryString })
            })
            if (!respons.ok) throw new Error(`Error ${respons.status}`)
            const data = await respons.json()
            console.log('POST', data)
            router.push('/search')


        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="flex place-items-center justify-center h-96 bg-[length:1920px_600px] bg-no-repeat px-7 sm:w-screen">
            <form onSubmit={queryDataBase} className="flex">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <button onMouseEnter={() => setClassName(true)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">{cat} <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

                <div className="relative w-full">
                    <input ref={query} type="search" id="search-dropdown" className="block p-2.5 w-96 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>

                <div id="dropdown" onMouseLeave={() => setClassName(false)} className={`z-10 absolute top-72 ${toggleClassName ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button onClick={updateCategory} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Categories</button>
                        </li>
                        <li>
                            <button onClick={updateCategory} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nature</button>
                        </li>
                        <li>
                            <button onClick={updateCategory} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Human</button>
                        </li>
                        <li>
                            <button onClick={updateCategory} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Culture</button>
                        </li>
                        <li>
                            <button onClick={updateCategory} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animals</button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )

}



