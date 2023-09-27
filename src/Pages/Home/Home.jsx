import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";




const Home = () => {


const donations = useLoaderData()

const [filteredDonations, setFilteredDonations] = useState(donations);

  const handleSearch = (searchQuery) => {
    // Filter the donations based on the search query
    const filtered = donations.filter((donation) =>
      donation.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDonations(filtered);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <DonationCards filteredDonations={filteredDonations} donations={donations}/>
    </div>
  );
};

export default Home;

