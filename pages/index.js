import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>BookMyStay</title>
        {/* <link rel='icon' href=''/> */}
      </Head>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pulling some data from server {for home page ==> static rendering} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={location}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live AnyWhere</h2>
          <div className="flex space-x-2 p-3 -ml-3 overflow-x-scroll scrollbar-hide ">
            {cardsData?.map(({ img, distance, location }) => (
              <MediumCard key={img} img={img} location={location} />
            ))}
          </div>
        </section>
        
        <LargeCard
          img="https://images.unsplash.com/photo-1470138831303-3e77dd49163e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="The Greatest Outdoor "
          description="Wishlist Curated By BookMyStay"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = 
    await fetch("https://api.npoint.io/ef030f92a50f1b389d04")
  .then((res) => res.json());

  const cardsData = await fetch(
    "https://api.npoint.io/405903f5951e4ea24656"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
