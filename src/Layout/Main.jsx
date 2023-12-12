import About from "../Components/About";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Qualification from "../Components/Qualification";
import Services from "../Components/Services";
import Skills from "../Components/Skills";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Qualification></Qualification>
            <Projects></Projects>
        </div>
    );
};

export default Main;