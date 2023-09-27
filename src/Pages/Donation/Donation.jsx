import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const Donation = () => {
    const [donation, setDonation] = useState({});
    const {id} = useParams();
    
    const donations = useLoaderData();

    useEffect(() => {
        // Parse idx to an integer
        const idxNumber = parseInt(id);
        console.log(idxNumber);

        // Use the parsed idxNumber for comparison
        const findDonation = donations?.find((donation, index) => index === idxNumber);

        // Check if a matching donation is found
        if (findDonation) {
            setDonation(findDonation);
            console.log("findDonation");
        } else {
            console.log("Donation not found.");
        }
    }, [id, donations]);

    return (
        <div className="max-w-[1300px] mx-auto">
            <DonationDetails donation={donation}></DonationDetails>
        </div>
    );
};

export default Donation; 