import Link from "next/link"
import { useRef } from "react"
import prisma from "../../lib/prisma"


export default function Index() {
    const userName = useRef()
    const passWord = useRef()

    function checkLoginInfo(e) {
        e.preventDefault()
        
        try {
            const respons = fetch('/../')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex-1 grid grid-cols-2 justify-items-center items-center border-8 rounded-xl h-4/5 sm:mx-32 p-20 ">
                <div className="col-span-1 bg-[url('https://loremflickr.com/900/600')] bg-no-repeat bg-cover bg-transparent w-full h-full">

                </div>
                <div className="col-span-1 self-start ">

                    <img src="http://placekitten.com/150/150" className="rounded-full m-auto border-4 border-black"></img>
                    <h1 className="text-5xl mb-14 mt-8 text-center">WELCOME</h1>
                    <form onSubmit={checkLoginInfo}>
                        <div className="mb-20 ">
                            <div><label htmlFor="username">Username</label></div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                ref={userName}
                                className="border-b-4 w-96 mt-4 outline-none bg-transparent" />
                        </div>
                        <div className="mb-2">
                            <div><label htmlFor="password">Password</label></div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                ref={passWord}
                                className="border-b-4 w-96 mt-4 outline-none bg-transparent" />
                            <p className="text-right"><a href="#">Forgot password?</a></p>
                        </div>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl my-2 w-full">Login</button>
                        </div>
                        <div><Link href="./signUp">Create account</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
