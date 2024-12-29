import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: 'Bodsphere has made Yoga accessible and affordable for everyone. So grateful!',
        author: 'Alejandra Martinez',
        location: 'Argentina',
    },
    {
        quote: 'The instructors are amazing and the classes fit perfectly into my schedule.',
        author: 'Michael Chen',
        location: 'Singapore',
    },
    {
        quote: "I've never felt better! The virtual classes are just as effective as in-person.",
        author: 'Sarah Johnson',
        location: 'Canada',
    },
    {
        quote: 'Great community and fantastic guidance. Highly recommended!',
        author: 'David Kumar',
        location: 'India',
    },
];

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Calculate items to show based on screen size
    const itemsToShow = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - itemsToShow.xl));
    };

    return (
        <div className="w-full mx-auto px-4 md:px-10 py-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">What they say about</h2>
                <h2 className="text-3xl font-bold mb-2">Bodsphere</h2>
                <div className="flex justify-end gap-2 mb-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="rounded-full w-8 h-8 border border-gray-300 flex items-center justify-center disabled:opacity-50 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= testimonials.length - 1}
                        className="rounded-full w-8 h-8 border border-gray-300 flex items-center justify-center disabled:opacity-50 hover:bg-gray-50"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsToShow.xl)}%)`,
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] xl:min-w-[25%] px-3"
                        >
                            <div className="bg-[#f3f5f9] rounded-lg p-6 h-full">
                                <img src="/images/quote.png" alt="" className='w-20 mb-5'/>
                                <p className="text-lg mb-4 text-gray-800 font-medium">{testimonial.quote}</p>
                                <div>
                                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                                    <p className="text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;