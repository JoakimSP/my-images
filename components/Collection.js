import Image from "next/image"

export default function Collection() {
  return (
    <div className="flex">
        <span className="flex-1"><Image src={"http://placekitten.com/200/300"} width="200" height="300" alt="Collection"/></span>
        <span className="flex-1"><Image src={"http://placekitten.com/200/300"} width="200" height="300" alt="Collection" /></span>
        <span className="flex-1"><Image src={"http://placekitten.com/200/300"} width="200" height="300" alt="Collection"/></span>
        <span className="flex-1"><Image src={"http://placekitten.com/200/300"} width="200" height="300" alt="Collection"/></span>
    </div>
  )
}
