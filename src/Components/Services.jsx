const Services = () => {
    return (
        <div id="services" className="mt-20">
            <div><h2 className="text-center font-bold text-3xl underline">Services</h2></div>
            <div className="grid grid-cols-2 lg:flex justify-center items-center gap-10 mt-8">
                <div className="shadow-xl bg-slate-300 h-24 flex justify-center items-center px-5">
                    <p>Website Development</p>
                </div>
                <div className="shadow-xl bg-slate-300 h-24 flex justify-center items-center px-5">
                    <p>Website Modification</p>
                </div>
                <div className="shadow-xl bg-slate-300 h-24 flex justify-center items-center px-5">
                    <p>Maintanannce</p>
                </div>
            </div>
        </div>
    );
};

export default Services;