import { useState } from 'react';

const Sidebar = ({ isOpen, toggleMenu }: any) => {
    return (
        <div className={`fixed z-50 top-0 right-0 h-screen w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <ul className="flex flex-col space-y-4 p-8 text-lg font-semibold">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Categories</li>
                <li className="cursor-pointer">Notification</li>
                <li className="cursor-pointer">AI Music</li>
                <li className="cursor-pointer">
                    <img src="/images/icon1.png" alt="Sun Icon" className="h-6" />
                </li>
                <li className="cursor-pointer">
                    <img src="/images/icon2.png" alt="User Icon" className="h-6" />
                </li>
            </ul>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between px-4 lg:px-10 py-4 bg-white z-50">
            <div className="flex-shrink-0">
                <img src="/images/logo.png" alt="Logo" className="h-10" />
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <ul className="hidden lg:flex lg:flex-row lg:space-x-8 text-lg font-semibold">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Categories</li>
                <li className="cursor-pointer">Notification</li>
                <li className="cursor-pointer">AI Music</li>
                <li className="cursor-pointer">
                    <img src="/images/icon1.png" alt="Sun Icon" className="h-6" />
                </li>
                <li className="cursor-pointer">
                    <img src="/images/icon2.png" alt="User Icon" className="h-6" />
                </li>
            </ul>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        </nav>
    );
};

export default Navbar;