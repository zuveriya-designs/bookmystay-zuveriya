import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "@/components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className=" flex-grow pt-14 px-6 ">
          <p className="text-[9px] md:text-xs capitalize">
            300+ Stays
            <span className="border-2 py-1 rounded-md mx-1 md:mx-2 px-2 md:px-4 border-red-300 font-semibold">
              {range}
            </span>
            for {noOfGuests} number of 
            {noOfGuests == 1 ? <> Guest</> : <> Guest's</>}
          </p>
          <h1 className="text-xl md:text-2xl font-semibold mt-4 mb-6 capitalize">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button"> Cancellation Flexibility </p>
            <p className="button"> Type of Place </p>
            <p className="button"> Price </p>
            <p className="button"> Rooms and Beds </p>
            <p className="button"> More Filters </p>
          </div>

          <div className="flex flex-col  xl:flex-row md:flex-row flex-wrap justify-center mx-auto bg-slate-100">
            {searchResults.map(
              ({
                id,
                img,
                location,
                description,
                title,
                price,
                star,
                total,
              }) => (
                <InfoCard
                  key={id}
                  img={img}
                  location={location}
                  description={description}
                  title={title}
                  price={price}
                  total={total}
                  star={star}
                />
              )
            )}
          </div>
        </section>
      </main>
 
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://api.npoint.io/54f2d409318b8a23b8b6"
  ).then((res) => res.json());
  return {
    props: { searchResults },
  };
}
