import Image from "next/legacy/image"

function LargeCard({img,title,description,buttonText}) {
  return (
    <section className="relative py-16 cursor-pointer">
        <div className="relative h-[200px] sm:h-[280px] lg:h-[330px] xl:h-[350px] min-w-[300px]">
            <Image
            src={img}
            layout='fill'
            objectFit="cover"
            className="rounded-2xl"
            alt='banner home'
            />
        </div>
        <div className="absolute top-20 lg:top:32 xl:top-32 sm:left-8 sm:top-28  lg:left-12 left-5">
            <h3 className="text-2xl lg:text-5xl sm:text-4xl  mb-3 w-auto ">{title}</h3>
            <p className="text-sm lg:text-md mt-4 ">{description}</p>
            <button className="text-sm lg:text-md  text-white bg-black rounded-lg mt-5 px-4 py-2 hover:scale-105 transition transform duration-200 ease-out">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard