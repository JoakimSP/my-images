import BgImage from '../../public/5EC255C4-E950-4A1A-B1AE-2388483BA5C5.JPG'
import Searchbar from '../../components/searchbar'

export default function SearchBlock() {


  return (
    <div className="flex place-items-center justify-center h-96 bg-[length:1920px_600px] bg-no-repeat px-7 sm:w-screen" style={{ backgroundImage: `url(${BgImage.src})` }} >
        <Searchbar></Searchbar>
    </div>
  )
}

