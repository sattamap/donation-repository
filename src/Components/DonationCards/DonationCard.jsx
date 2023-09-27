import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({ donation, idx }) => {
   
    const { picture, title, category, category_bg, card_bg, text_button_bg } = donation || {};

    // Define inline styles based on the color values
    const cardStyle = {
        backgroundColor: card_bg,
    };

    const titleStyle = {
        color: text_button_bg, // Set text color for the title
    };

    const categoryButtonStyle = {
        color: text_button_bg,
        backgroundColor: category_bg, // Set background color for the category button
    };

    return (
        <div >
            <Link to={`/donation/${idx}`} >
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border  shadow-md" style={cardStyle}>
                    <div className="relative rounded-xl bg-white bg-clip-border text-gray-700">
                        <figure><img src={picture} className="h-full w-full object-cover rounded-t-xl" alt={title} /></figure>
                    </div>
                    <div className="p-6">
                        <button className="rounded-lg py-2 px-4 text-white" style={categoryButtonStyle} >
                            {category}
                        </button>
                        <div className="mb-2 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased" style={titleStyle}>
                                {title}
                            </p>

                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};
DonationCard.propTypes = {
    donation: PropTypes.array ,
    idx: PropTypes.number,
}
export default DonationCard;
