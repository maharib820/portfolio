import resume from "../../public/Resume.txt"

const About = () => {
    return (
        <div id="about" className="flex mt-10 lg:mt-24">
            <div>
                <h2 className="pl-4 text-3xl font-semibold border-l-4 border-red-600 text-center lg:text-left">About Me</h2>
                <p className="pl-4 mt-5 font-bold">
                    I am a dedicated web developer with a strong foundation in React, Express, MongoDB, JavaScript, HTML and CSS. I have a passion for crafting seamless digital experiences. Throughout my professional journey, I have had the privilege of working on diverse projects that have honed my skills and deepened my understanding of web technologies. From dynamic React frontends to robust Express backends, I thrive on turning ideas into tangible, user-friendly solutions. My approach to coding is rooted in a commitment to clean, efficient, and maintainable code. I am driven by a curiosity to explore emerging technologies and a genuine enthusiasm for problem-solving. Whether it is building scalable web applications or collaborating on innovative projects, I am always eager to tackle new challenges and contribute to the ever-evolving landscape of web development.
                </p>
                <div className="flex gap-5 items-center pl-4 mt-5">
                    <div>
                        <h2 className="font-bold"><span className="text-3xl">✔️ 6 </span>Months of experiences</h2>
                    </div>
                    <div>
                        <h2 className="font-bold"><span className="text-3xl">✔️ 3 </span>Live Projects</h2>
                    </div>
                </div>
                <a href={`${resume}`} download><button className="btn bg-red-600 text-white mt-5 ml-4">Download Resume</button></a>
            </div>
        </div>
    );
};

export default About;