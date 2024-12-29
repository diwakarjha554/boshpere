const Card = () => {
    return (
        <div className="px-4 md:px-10 py-20 ">
            <div className="mb-8 md:mb-0 rounded-3xl bg-[#2d2c2f] text-white p-5 flex justify-between">
                <div className="p-10">
                    <h2 className="text-white text-4xl font-bold mb-4">Download the app</h2>
                    <p className="text-gray-300 text-lg mb-6 max-w-md">
                        Get unlimited access to Yoga Teacher Trainings, Yoga classes, Meditation and Pranayama, Yogic
                        Wisdom and more.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {/* Apple Store Button */}
                        <button className="flex items-center bg-black text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                            <span className="mr-2">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.02.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </span>
                            <div className="text-left">
                                <div className="text-xs">Get it on</div>
                                <div className="text-sm font-semibold">Apple Store</div>
                            </div>
                        </button>

                        {/* Google Play Button */}
                        <button className="flex items-center bg-black text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                            <span className="mr-2">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 20.5V3.5c0-.96.75-1.77 1.72-1.97l.12-.03L13.73 12l-8.89 10.5c-.83-.3-1.72-1.1-1.72-2zM16.27 12L5.06 1.5c.27-.1.55-.15.85-.15.43 0 .85.12 1.22.35l13.34 7.8c.73.43 1.17 1.19 1.17 2s-.44 1.57-1.17 2l-13.34 7.8c-.37.23-.79.35-1.22.35-.3 0-.58-.05-.85-.15L16.27 12z" />
                                </svg>
                            </span>
                            <div className="text-left">
                                <div className="text-xs">Get it on</div>
                                <div className="text-sm font-semibold">Play Store</div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex items-center p-10">
                    <img src="/images/image3.png" alt="Desktop" className="" />
                </div>
            </div>
        </div>
    );
};

export default Card;