import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const instructors = [
    {
        name: 'Preetika Bhatnagar',
        image: '/images/inst1.png',
        alt: 'Instructor in pink outfit doing yoga pose by pool',
    },
    {
        name: 'Samarthya Bhatnagar',
        image: '/images/inst2.png',
        alt: 'Instructor in black outfit doing warrior pose outdoors',
    },
    {
        name: 'Diana',
        image: '/images/inst3.png',
        alt: 'Instructor in pink outfit doing side plank pose in park',
    },
    {
        name: 'Herkeesh',
        image: '/images/inst4.png',
        alt: 'Instructor doing dancer pose on beach',
    },
    {
        name: 'Preetika Bhatnagar',
        image: '/images/inst1.png',
        alt: 'Instructor in pink outfit doing yoga pose by pool',
    },
    {
        name: 'Samarthya Bhatnagar',
        image: '/images/inst2.png',
        alt: 'Instructor in black outfit doing warrior pose outdoors',
    },
    {
        name: 'Diana',
        image: '/images/inst3.png',
        alt: 'Instructor in pink outfit doing side plank pose in park',
    },
    {
        name: 'Herkeesh',
        image: '/images/inst4.png',
        alt: 'Instructor doing dancer pose on beach',
    },
];

const InstructorsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 4;
    const maxIndex = instructors.length - itemsToShow;

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    return (
        <div className="w-full  mx-auto px-4 md:px-10 py-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Meet Your Instructors</h2>
                <p className="text-gray-600 mb-4">
                    We work with the finest professionals to ensure you feel your best.
                </p>
                <div className="flex justify-end gap-2 mb-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="rounded-full w-8 h-8 border border-gray-800 flex items-center justify-center disabled:opacity-50 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="rounded-full w-8 h-8 border border-gray-800 flex items-center justify-center disabled:opacity-50 hover:bg-gray-50"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex gap-6 overflow-hidden">
                {instructors.slice(currentIndex, currentIndex + itemsToShow).map((instructor, index) => (
                    <div key={index} className="flex-1 bg-white rounded-lg shadow-sm border p-4">
                        <div className="rounded-lg overflow-hidden mb-4 aspect-[4/3]">
                            <img src={instructor.image} alt={instructor.alt} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-center font-medium text-lg">{instructor.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorsCarousel;
