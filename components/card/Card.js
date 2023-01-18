

export default function Card({ name }) {
    return (
        <span className="flex flex-col">
            <div>
                <img src="http://placekitten.com/400/300"/>
            </div>
            <div className="flex justify-center bg-white w-1/1 flex-1 text-center py-3 text-xl text-slate-500">
                <span className="flex-1">
                    <a>{name}</a>
                </span>
                <span className="text-black font-extrabold flex-0 ">
                &#62;
                </span>
            </div>
        </span>
    )
}
