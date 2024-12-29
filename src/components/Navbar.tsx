const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-white">
            <div className="flex-shrink-0">
                <img src="/images/logo.png" alt="Logo" className="h-10" />
            </div>
            <ul className="flex space-x-8 text-lg font-semibold">
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
        </nav>
    );
};

export default Navbar;
