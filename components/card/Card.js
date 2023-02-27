import Image from "next/image"

export default function Card({ name }) {
    return (
        <span className="flex flex-col">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-white">
                <a href="#">
                    <img className="rounded-t-lg" src="http://placekitten.com/400/300" alt="Picutres" />
                </a>
                <div className="p-2">
                    <a href="#">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">placeholder text <p className="inline-block">&#62;</p></h5>

                    </a>
                </div>
            </div>
        </span>
    )
}
