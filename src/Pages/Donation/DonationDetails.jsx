
import swal from "sweetalert";
import PropTypes from "prop-types";

const DonationDetails = ({ donation }) => {

    console.log(donation);
    const { picture, title, category, text_button_bg, description, price } = donation || {};
   
    console.log(title);
    // Define inline styles based on the color values
    const btnStyle = {
        backgroundColor: text_button_bg, // Set text color for the title
    };

  
      
  const handleAddToDonation = () => {
    
    const addedDonationArray = [];

    const donatedItems = JSON.parse(localStorage.getItem("donations"));

    
    if (!donatedItems) {
        addedDonationArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal("Thanks for donation", "success");
    } 
    
    else {


      const isExits = donatedItems.find((donation) => donation.title  === title && donation.category === category );

      
      if (!isExits) {

        addedDonationArray.push(...donatedItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        swal("Thanks for donation", "success");
       
      } else {
        swal("You have already donated here !", "error");
      }

    }
  };


    return (
        <div className="mt-10 space-y-8">
            <div className="max-w-[1300px] mx-auto relative">
                <img className="w-full rounded-lg" src={picture} alt="" />
                <div className="absolute bottom-0 w-full h-[15%] bg-black opacity-50"></div>


                <button onClick={handleAddToDonation} className="absolute left-14 bottom-9 p-3 rounded-lg text-white" style={btnStyle}><span> Donate $</span>{price}</button>
            </div>
            <div>
                <h1 className="font-bold text-4xl mb-6">{title}</h1>
                <p className="text-justify">{description}</p>
            </div>

        </div>
    );
};

DonationDetails.propTypes = {
    donation: PropTypes.array ,
}
export default DonationDetails;