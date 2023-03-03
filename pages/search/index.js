import Navbar from "../../components/navbar/Navbar";
import Searchbar from "../../components/searchbar";
import Image from "next/image";
import prisma from '../../lib/prisma';
import BgImage from '../../public/5EC255C4-E950-4A1A-B1AE-2388483BA5C5.JPG'


export default function index({ images }) {
  console.log(images)
  return (
    <>
      <Navbar />
      <Searchbar />
      <img src={`/content/images/${images.uid}`}/>
      <Image src={`/content/images/${images.uid}`} width="300" height="300" alt="Pic"/>
    {/*   <div className="flex flex-wrap">
         {images.map((image) => {
          return  <img src={`../content/images/${image.uid}`} width="300" height="300" alt="image"/> 
         })}
      </div> */}
    </>
  )
}

export async function getServerSideProps() {
  const images = await prisma.images.findMany();
  console.log(images)
  return {
    props: { images },
  };
}
