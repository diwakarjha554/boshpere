import GetCertified from "./components/GetCertified";
import Herosection from "./components/Herosection";
import InstructorsCarousel from "./components/InstructorsCarousel";
import Navbar from "./components/Navbar";
import YogicSection from "./components/YogicSection";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Herosection />
            <YogicSection />
            <GetCertified />
            <InstructorsCarousel />
        </div>
    );
}

export default App;
