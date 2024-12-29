const Herosection = () => {
    return (
        <div className="relative h-[800px] bg-green-50">
            <div
                className="absolute inset-0 bg-cover bg-center h-full w-full"
                style={{ backgroundImage: "url('/images/heroSection.jpg')" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <div className="relative z-10 h-full flex pt-16 pl-16">
                <div className="max-w-xl">
                    <h1 className="text-white font-bold">
                        <div className="text-6xl leading-tight">Welcome to</div>
                        <div className="text-6xl leading-tight">the Yogic World.</div>
                    </h1>

                    <div className="mt-6 text-white text-xl leading-relaxed">
                        <p>
                            Yoga Teacher Trainings, Classes,
                            <br />
                            Meditation, Pranayama, Music,
                            <br />
                            Philosophy & More.
                        </p>
                    </div>

                    <p className="mt-4 text-white italic text-lg">Everything under $10.</p>
                </div>
            </div>
        </div>
    );
};

export default Herosection;
