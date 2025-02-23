import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServicesImg from "../assets/birendra-padmaperuma-NjELNF_q4UY-unsplash.jpg"
import Packages from "../components/Packages";
import Footer from "../components/Footer";

function Services(){
    
    return (
        <>
        <Navbar />
            <Hero 
            cname = "hero-dest"
            heroImg = {ServicesImg}
            title = "Services"
            btnClass = "hide"
            />
        <Packages />
        <Footer />
        </>
    );
}
export default Services;