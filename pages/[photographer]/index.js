import Navbar from "../../components/navbar/Navbar"
import Image from "next/image"
import heroImage from '../../public/content/images/0A2DB59F-81B7-4C76-806E-4685D426FB43.JPG'

export default function index() {
    return (
        <div>
            <Navbar className="relative" />
            <div className="absolute text-center left-1/4 top-1/4">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">KIM JANSSON</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Read more about our photographer Kim Jansson</p>
            </div>
            <Image
                className="h-96 max-w-full object-cover"
                src={heroImage}
                alt="Hero image for photographer"
                width="1920"
                height="700"
            />
        </div>
    )
}
