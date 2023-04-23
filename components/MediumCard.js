import Image from "next/legacy/image"

function MediumCard({img,location}) {
  return (
    <div className="text-center cursor-pointer p-2 hover:scale-105 transform transition duration-300 ease-out">
<div className="relative h-64 w-64"><Image 
src={img}
layout="fill"
className="rounded-xl"
alt='places'
/></div>
<h3 className="text-2xl mt-3">{location}</h3>
    </div>
  )
}

export default MediumCard