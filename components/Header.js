import Image from "next/legacy/image"
import { UilSearchAlt, UilUsersAlt ,UilUserCircle, UilListUiAlt ,UilGlobe} from '@iconscout/react-unicons'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-4 py-3 md:px-10 ">
        {/* left */}
        <div className="relative flex items-center h-11 cursor-pointer my-auto">
            <Image 
            src='/images/brand-logo.png'
            layout='fill'
            objectFit="contain"
            objectPosition="left"
            alt='brand name'
            />
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input className="flex-grow pl-5 bg-transparent text-sm text-gray-400 outline-none" type='text' placeholder="Start Your Search" />
            <><UilSearchAlt className='hidden mx-auto md:mx-2 md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer' /></>
        </div>

        {/* right */}
        <div className="flex items-center justify-end text-gray-500 space-x-4">
            <p className="hidden md:inline cursor-pointer"> Become a host </p>
            <UilGlobe className='h-6 cursor-pointer' />
            <div className="flex items-center space-x-2 border-2  rounded-full
             p-1">
                <UilListUiAlt className="h-5 cursor-pointer" />
                <UilUserCircle className="h-6 cursor-pointer" />
            </div>
        </div>
    </header>
  )
}

export default Header