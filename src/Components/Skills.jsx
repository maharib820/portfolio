const Skills = () => {
    return (
        <div id="skills" className="flex justify-center">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="mr-2">React:</span>
                        </li>
                        <progress className="progress progress-error w-56" value="70" max="100"></progress>
                        <li>
                            <span className="mr-2">Express:</span>
                        </li>
                        <progress className="progress progress-error w-56" value="60" max="100"></progress>
                        <li>
                            <span className="mr-2">MongoDB:</span>
                        </li>
                        <progress className="progress progress-error w-56" value="65" max="100"></progress>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Language Skills</h3>
                    <ul className="list-disc list-inside">
                        <li>English</li>
                        <li>Bangla</li>
                        <li>Hindi</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;