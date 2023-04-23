import Image from "next/legacy/image"

function SmallCard({img,location,distance}) {
  return (
<div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
    {/* left */}
<div className="relative h-16 w-16">
        <Image 
        src={img}
        layout="fill"
className="rounded-lg"
        alt='category'
        />
        </div>
        {/* right */}
        <div className="">
        <h2>Location: {location}</h2>
        <h3 className="text-gray-500">Distance: {distance}</h3>
        </div>
</div>
  )
}

export default SmallCard