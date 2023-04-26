import Image from "next/legacy/image"

function Banner() {
  return (
    <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[620px]">
      <Image
        src="/images/home.jpg"
        layout="fill"
        objectFit="cover"
        className="bg-opacity-5"
        alt="banner of bookmystay"
      />
      <div className="absolute top-1/4 w-full text-center">
        <p className="font-serif font-normal text-white text-sm lg:text-2xl sm:text-lg"> Not Sure Where To GO??</p>
        <button className="text-red-400 bg-white px-10 py-3 shadow-md hover:text-red-500
        rounded-full font-medium my-5 hover:shadow-xl active:scale-95 transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-100">
          Let's Explore
        </button>
      </div>
    </div>
  );
}

export default Banner;
