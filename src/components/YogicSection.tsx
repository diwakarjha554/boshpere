const Stats = () => {
    return (
        <div className="w-full border-b">
            <div className="flex justify-between items-center text-center max-w-7xl mx-auto px-4 py-8">
                <div>
                    <h2 className="text-5xl font-bold mb-2">190+</h2>
                    <p className="text-gray-600">Countries</p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold mb-2">1,000+</h2>
                    <p className="text-gray-600">On-Demand Classes</p>
                </div>
                <div>
                    <h2 className="text-5xl font-bold mb-2">100K</h2>
                    <p className="text-gray-600">Members</p>
                </div>
            </div>
        </div>
    );
};

const FeatureCards = () => {
    const features = [
        {
            title: 'Yoga Teacher Trainings',
            description:
                "Become certified Yoga Teachers and transform your practice with World's most accessible & affordable programs.",
        },
        {
            title: 'Yoga Classes',
            description:
                'Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa and a lot more, to enhance your well-being.',
        },
        {
            title: 'Calm Music',
            description: 'Experience tranquility with our calming music, perfect for relaxation and mindfulness.',
        },
        {
            title: 'Pranayama & Meditation',
            description: 'Explore the power of breath and enhance your self-awareness and inner peace.',
        },
    ];

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Discover Your Yogic Path</h2>
                    <p className="text-gray-600">Join our community and transform your yoga practice today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const YogicSection = () => {
    return (
        <div className="w-full px-4 md:px-10 py-20">
            <Stats />
            <FeatureCards />
        </div>
    );
};

export default YogicSection;
