import { useEffect, useState } from "react";
import AllDonations from "./AllDonations";


const Donations = () => {


    const [donations, setDonations] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow,setIsShow] = useState(false)
  
  
    useEffect(() => {
      const donatedItems = JSON.parse(localStorage.getItem("donations"));
  
      if (donatedItems) {
        setDonations(donatedItems);
  
      } else {
        setNofound("No Data Found");
      }
    }, []);
  
    return (
      <div className="max-w-[1300px] mx-auto">
        {noFound ? (
          <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {
                  isShow ? donations.map((donation, index) => (
                      <AllDonations key={index} donation={donation}></AllDonations>
                    )) 
                    
                    : donations.slice(0,4).map((donation, index) => (
                      <AllDonations key={index} donation={donation} index={index}></AllDonations>
                    ))
              }
            </div>
  
            {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="btn  mt-10 px-5 text-white bg-[#009444] block mx-auto">
              {isShow ? "See less" : "See more"}
            </button>}
          </div>
        )}
      </div>
    );
  };
  

export default Donations;