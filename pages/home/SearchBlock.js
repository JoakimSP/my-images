import Searchbar from '../../components/searchbar'
import prisma from '../../lib/prisma'

export default function SearchBlock({images}) {
  console.log(images)

  return (
    <div className="flex place-items-center justify-center h-96 bg-[length:1920px_600px] bg-no-repeat px-7 sm:w-screen')]">
        <Searchbar></Searchbar>
    </div>
  )
}

export async function getServerSideProps() {
  const images = await prisma.images.findMany();
  console.log('images',images)
  return {
    props: { images },
  };
}