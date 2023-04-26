import Image from "next/legacy/image";
import {
  UilSearchAlt,
  UilUsersAlt,
  UilUserCircle,
  UilListUiAlt,
  UilGlobe,
} from "@iconscout/react-unicons";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
const router = useRouter()
  const restInput = () => {
    setSearchInput("")
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const search = () => {

  router.push(
    {
      pathname:'/search',
      query:{
        location: searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests,
      }
    }
  )
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-white shadow-md px-4 py-3  md:px-10 ">
      {/* left */}
      <div onClick={() => router.push('/')} className="relative flex items-center h-10 md:h-11 cursor-pointer my-auto">
        <Image
          src="/images/brand-logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="BookMyStay"
        />
      </div>

      {/* middle */}
      <div className="hidden md:flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent text-xs md:text-sm text-gray-400 outline-none"
          type="text"
          placeholder={placeholder || "Start Your Search"}
        />
        <>
          <UilSearchAlt className="hidden mx-auto md:mx-2 md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer" />
        </>
      </div>

      {/* right */}
      <div className="flex flex-grow items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer"> Become a host </p>
        <UilGlobe className="h-6 cursor-pointer" />
        <div
          className=" items-center  flex space-x-2 border-2  rounded-full
                p-1"
        >
          <UilListUiAlt className="h-5 cursor-pointer" />
          <UilUserCircle className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className=" flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff7373"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b  mb-4">
            <h2 className="text-xl flex-grow border-0 font-semibold">
              Number of Guests
            </h2>
            <UilUsersAlt className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 outline-none text-lg text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={restInput} className="flex-grow hover:shadow-inner hover:bg-slate-100 hover:text-black shadow-md bg-white p-2 rounded-full mx-2 text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-700 hover:shadow-inner hover:bg-slate-100 shadow-md hover:text-black bg-white p-2 rounded-full mx-2">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
