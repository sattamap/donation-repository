import DonationCard from "./DonationCard";
import PropTypes from "prop-types";

const DonationCards = ({ filteredDonations }) => {
  console.log(filteredDonations);

  if (!filteredDonations || filteredDonations.length === 0) {
    return <p>No donations match your search.</p>;
  }

  return (
    <div className="max-w-[1300px] mx-auto py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ml-20 md:ml-0 lg:ml-0">
        {filteredDonations.map((donation, index) => (
          <DonationCard key={index} donation={donation} idx={index} />
        ))}
      </div>
    </div>
  );
};

DonationCards.propTypes = {
    filteredDonations: PropTypes.object,
}
export default DonationCards;
