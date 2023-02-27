import Card from "../../components/card/Card"

export default function FeaturedCollections() {
  return (
    <div className="grid  grid-rows-8  bg-stone-100 px-7 sm:w-screen">
        <div className="self-start mb-7 xl:mb-3 row-span-1 ">
            <h1 className="font-extrabold h1 text-2xl mb-2">Featured collections</h1>
            <p>Discover a wide range of diffrent collections of images to fit your needs.</p>
        </div>
        <div className="flex flex-wrap justify-between row-span-3 mb-20">
            <Card name={"Cat"}/>
            <Card name={"Cat"}/>
            <Card name={"Cat"}/>
        </div>
    </div>
  )
}
