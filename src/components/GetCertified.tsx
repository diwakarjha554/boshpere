const GetCertified = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-around  mx-auto px-4 md:px-10 py-20 gap-12 w-full bg-gray-100">
            {/* Left Content */}
            <div className="flex-1 max-w-xl">
                <h1 className="text-4xl font-bold mb-6">
                    Get Internationally Accredited by Bodsphere, from the comfort of your home
                </h1>

                <p className="text-gray-700 mb-8">
                    Join the Bodsphere Community and take the first step towards joining the World's Biggest Community
                    of Yoga Schools and Teachers that represent high quality, safe, affordable, accessible and equitable
                    Yoga.
                </p>

                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Get Accredited
                </button>
            </div>

            {/* Right Content - Phone Image */}
            <div className="flex-1 max-w-md">
                <img
                    src="/images/image2.png"
                    alt="Bodsphere mobile app interface"
                    className="w-full h-auto transform rotate-6"
                />
            </div>
        </div>
    );
};

export default GetCertified;
