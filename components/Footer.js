function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center md:space-x-5 space-y-10  md:px-32 px-10 text-center py-14">
      <div className="space-y-4 md:px-4">
        <h4 className="text-3xl font-semibold">BookMyStay</h4>
        <p className="text-sm md:text-md text-gray-500">
          Scelerisque viverra mauris in aliquam sem fringilla ut morbi.
          Scelerisque eu ultrices vitae auctor.
        </p>
      </div>
     
     <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold text-black text-[1rem] ">About</h5>
        <p className="cursor-pointer hover:font-semibold">News Room</p>
        <p className="cursor-pointer hover:font-semibold">Investors</p>
        <p className="cursor-pointer hover:font-semibold">BookMyStay Plus</p>
        <p className="cursor-pointer hover:font-semibold">Terms & Conditions</p>
        <p className="cursor-pointer hover:font-semibold">BookMyStay Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold text-black text-[1rem]">Explore By City</h5>
        <p className="cursor-pointer hover:font-semibold">Bangaluru</p>
        <p className="cursor-pointer hover:font-semibold">Delhi</p>
        <p className="cursor-pointer hover:font-semibold">Goa</p>
        <p className="cursor-pointer hover:font-semibold">Chennai</p>
        <p className="cursor-pointer hover:font-semibold">Kerala</p>
      </div>
      <div className="space-y-4 text-xs text-gray-500">
        <h5 className="font-bold text-black text-[1rem]">Favourites</h5>
        <p className="cursor-pointer hover:font-semibold">
          The Oberoi Udaivilas
        </p>
        <p className="cursor-pointer hover:font-semibold">
          Coorg Wilderness Resort
        </p>
        <p className="cursor-pointer hover:font-semibold">
          The Taj Mahal Palace
        </p>
        <p className="cursor-pointer hover:font-semibold">ITC Gardenia</p>
        <p className="cursor-pointer hover:font-semibold">
          Lalitha Mahal Palace Hotel
        </p>
      </div>
     </div>
    
  );
}

export default Footer;
