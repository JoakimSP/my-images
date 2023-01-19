import { useState } from 'react'
import BgImage from '../../public/5EC255C4-E950-4A1A-B1AE-2388483BA5C5.JPG'
import DropDown from '../../components/DropDown'

export default function SearchBlock() {
  const [showCategoryBool, setCategoryBool] = useState(false)


  return (
    <div className="h-96 bg-[length:1920px_600px] bg-no-repeat px-7 sm:w-screen" style={{ backgroundImage: `url(${BgImage.src})` }}>
      <div className=''>
        <img src="myimages-logo-black-2.svg" className="w-72 pt-7"></img>
      </div>
      <div className='md:flex  md:mx-48 mt-12'>
        <DropDown/>
        <input type="search" className=' flex-1 rounded-r-lg' />
      </div>

    </div>
  )
}

