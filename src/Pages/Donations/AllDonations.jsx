
import PropTypes from "prop-types";

const AllDonations = ({ donation}) => {
    const { picture, title, category, category_bg, card_bg, text_button_bg, price } = donation || {};

    // Define inline styles based on the color values
    const cardStyle = {
        backgroundColor: card_bg,
    };

    const titleStyle = {
        color: text_button_bg, // Set text color for the title
    };
    const btnBgStyle = {
        backgroundColor: text_button_bg, // Set text color for the title
    };

    const categoryButtonStyle = {
        color: text_button_bg,
        backgroundColor: category_bg, // Set background color for the category button
    };

    return (
        <div >

            <div className="w-auto flex shadow-xl rounded-lg " style={cardStyle}>

                <img className="rounded-l-lg" src={picture} alt="donation" />


                <div className="card-body ">
                    <button className="w-20 rounded-sm" style={categoryButtonStyle}>{category}</button>
                    <p className="text-black">{title}</p>
                    <p style={titleStyle}><span>$</span>{price}</p>
                    <button className="btn btn-primary font-semibold text-base w-36" style={btnBgStyle}>View Details</button>
                </div>
            </div>



        </div>
    );
};

AllDonations.propTypes = {
    donation: PropTypes.array,
    
}

export default AllDonations;