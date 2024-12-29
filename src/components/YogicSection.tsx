import React, { useState, useEffect, useRef } from 'react';

const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const NumberCounter: React.FC<{ end: number; duration: number; isAnimating: boolean }> = ({ end, duration, isAnimating }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (!isAnimating) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / duration, 1);
            const easedPercentage = easeInOutQuad(percentage);
            const currentCount = Math.floor(end * easedPercentage);

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, isAnimating]);

    return (
        <div className="relative text-5xl font-bold select-none flex flex-wrap items-center justify-center w-full">
            {count.toLocaleString()}
            <span className='text-4xl absolute top-0 -right-6'>+</span>
        </div>
    );
};

const Stats = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = componentRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const statsData = [
        { title: 'Countries', value: 190 },
        { title: 'On-Demand Classes', value: 1000 },
        { title: 'Members', value: 100000 },
    ];

    return (
        <div ref={componentRef} className="w-full border-b">
            <div className="flex flex-wrap justify-between items-center text-center max-w-7xl mx-auto px-4 py-8 gap-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <NumberCounter end={stat.value} duration={2000} isAnimating={isVisible} />
                        <p className="text-gray-600">{stat.title}</p>
                    </div>
                ))}
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