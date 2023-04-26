import Image from "next/legacy/image";
import { UilHeart, UilStar } from "@iconscout/react-unicons";
function InfoCard({ img, location, description, title, price, star, total }) {
  return (
    <div className="grid grid-rows-2 md:flex px-2  py-5 md:py-7 bg-white m-4 md:px-4 pr-4 border-b cursor-pointer hover:opacity-80  hover:shadow-lg transition duration-200 ease-out rounded-lg ">
      <div className="relative  h-44  w-auto  md:mb-0 mb-2 md:h-auto  sm:w-[100%]  md:w-72 flex-shrink-0 ">
        <Image className="rounded-2xl " src={img} layout="fill" objectFit="cover" alt="hotel image" />
      </div>
      <div className="flex flex-col flex-grow px-5">
        <div className="flex justify-between">
          <p className="text-xs md:text-lg">{location}</p>
          <UilHeart className="h-7 md:-mt-5 md:-mr-5 cursor-pointer" />
        </div>
        <h4 className="text-xs font-semibold md:text-lg">{title}</h4>
        <div className="border-b-2 border-red-300 w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 md:flex-grow ">{description}</p>
        <div className="flex justify-between items-end pt-4 md:pt-5">
          <p className="flex text-sm md:text-lg items-center">
            Rating:
            <UilStar className="h-4  text-yellow-400" />
            {star}
          </p>
          <div className="grid ">
            <p className="text-sm lg:text-xl underline decoration-red-300 font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight text-sm md:text-md shadow-inner bg-gray-50 w-max float-right px-2 py-1 rounded-md">Total: {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
