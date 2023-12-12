import image from "../../public/picture.png"
import bg from "../../public/bg.png"
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Banner = () => {

    const bannerStyle = {
        background: `url(${bg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    return (
        <div className="flex items-center justify-between py-1 lg:py-16">
            <div className="lg:flex-1 pr-8">
                <h2 className="pl-4 text-3xl font-semibold border-l-4 border-red-600 text-center lg:text-left">Hi, I am Maharib Shafiqee<br></br>a web developer</h2>
                <p className="font-bold mt-5 pl-4 text-center lg:text-left">
                    Passionate about creating web applications that provide meaningful and enjoyable experiences. I love learning and exploring new technologies to enhance my skills. Let us build something amazing together!
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-5 pl-4 mt-8 text-xl">
                    <Link><button><FaLinkedin className="hover:text-blue-600"></FaLinkedin></button></Link>
                    <Link><button><FaTwitter className="hover:text-blue-500"></FaTwitter></button></Link>
                    <Link><button><FaFacebook className="hover:text-blue-700"></FaFacebook></button></Link>
                </div>
            </div>
            <div className="bg-lime-500 rounded-t-full flex-1 hidden lg:flex" style={bannerStyle}>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;