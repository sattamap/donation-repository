import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (

        <div className="max-w-[1300px] mx-auto navbar py-14">
            <div className="flex-1">
                <img  src="/public/Resources/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/donations"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Donation
                        </NavLink>


                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>


                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;