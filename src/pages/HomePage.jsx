import Benefits from "@components/Sections/Benefits";
import Faqs from "@components/Sections/Faqs";
import HeroSection from "@components/Sections/HeroSection";
import Skills from "@components/Sections/Skills";
import Testimonials from "@components/Sections/Testimonials";
import Works from "@components/Sections/Works";

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection />
            <Skills />
            <Benefits />
            <Works />
            <Testimonials />
            <Faqs />
        </div>
    )
}

export default HomePage;