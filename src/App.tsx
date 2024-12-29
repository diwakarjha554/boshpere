import Card from "./components/Card";
import Footer from "./components/Footer";
import GetCertified from "./components/GetCertified";
import Herosection from "./components/Herosection";
import InstructorsCarousel from "./components/InstructorsCarousel";
import Navbar from "./components/Navbar";
import ReviewCarousel from "./components/ReviewCarousel";
import YogaLandingSection from "./components/YogaLandingSection";
import YogaSubscription from "./components/YogaSubscription";
import YogicSection from "./components/YogicSection";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Herosection />
            <YogicSection />
            <GetCertified />
            <InstructorsCarousel />
            <YogaLandingSection />
            <ReviewCarousel />
            <YogaSubscription />
            <Card />
            <Footer />
        </div>
    );
}

export default App;
