import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";

const Banner = ({ handleSearch }) => {
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        handleSearch(searchQuery);
    };

    return (

        <div className="bg-gray-200">
            <div className="relative">
                <div className="absolute top-0 w-full z-50">
                <Navbar></Navbar>
                </div>
                <img src="./banner.png" alt="Your Image" className="w-full h-auto" />
                <div className="absolute inset-0 bg-white opacity-95"></div>
                <div className="absolute top-3/4 left-1/4  md:top-2/3 md:left-1/4 lg:top-1/3 lg:left-1/3 flex flex-col justify-center items-center">
                    <h1 className=" font-bold md:text-xl lg:text-4xl mb-8">I Grow By Helping People In Need</h1>
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <input
                                className="border-l-2 border-y-2 p-2 rounded-l w-36 md:w-60 lg:w-80"
                                type="text"
                                placeholder="Search here..."
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                            <button
                                className="bg-[#FF444A] text-white px-6 py-2 border-y-red-800 rounded-r"
                                onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func,
}

export default Banner;

