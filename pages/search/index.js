import Navbar from "../../components/navbar/Navbar";
import Searchbar from "../../components/searchbar";
import Image from "next/image";
import prisma from '../../lib/prisma';


export default function index({ images }) {
  console.log(images)
  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="flex flex-wrap">
         {images.map((image) => {
          return  <Image src={`/content/images/${image.uid}.JPG`} width={300} height={300} alt="Pic"/> 
         })}
      </div> *
    </>
  )
}

export async function getServerSideProps() {
  const images = await prisma.images.findMany();
  console.log('images',images)
  return {
    props: { images },
  };
}
