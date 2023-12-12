import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {

    const location = useLocation();
    const [show, setShow] = useState(false);

    return (
        <div className="flex-col lg:flex-row flex justify-between items-center py-10 lg:px-4 xl:px-0">
            <div className="flex items-center gap-4">
                <button className="lg:hidden" onClick={() => setShow(!show)}><IoIosMenu></IoIosMenu></button>
                <h1 className="text-lg font-bold font-roboto text-red-600">Maharib Shafiqee</h1>
            </div>
            <div className="hidden lg:flex items-center gap-5 font-bold">
                <NavLink to={"/"} className={location.pathname === "/" ? "text-red-600 underline" : ""}>Home</NavLink>
                <a className="hover:underline hover:text-red-600" href="#about">About</a>
                <a className="hover:underline hover:text-red-600" href="#skills">Skills</a>
                <a className="hover:underline hover:text-red-600" href="#services">Services</a>
                <a className="hover:underline hover:text-red-600" href="#qualification">Qualifications</a>
                <a className="hover:underline hover:text-red-600" href="#about">Projects</a>
            </div>
            <div className={`lg:hidden flex flex-col font-bold shadow-lg p-6 mt-4 rounded-xl ${show ? "" : "hidden"}`}>
                <NavLink to={"/"} className={location.pathname === "/" ? "text-red-600 underline" : ""}>Home</NavLink>
                <a className="hover:underline hover:text-red-600" href="#about">About</a>
                <a className="hover:underline hover:text-red-600" href="#skills">Skills</a>
                <a className="hover:underline hover:text-red-600" href="#services">Services</a>
                <a className="hover:underline hover:text-red-600" href="#qualification">Qualifications</a>
                <a className="hover:underline hover:text-red-600" href="#about">Projects</a>
            </div>
        </div>
    );
};

export default Navbar;