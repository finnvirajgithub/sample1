import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DestinationImg from "../assets/4.jpg"
import Footer from "../components/Footer";
import Destination from "../components/Destination";

function Destinations(){
    
    return (
        <>
        <Navbar />
            <Hero 
            cname = "hero-dest"
            heroImg = {DestinationImg}
            title = "Destinations"
            btnClass = "hide"
            />
        <Destination />
        <Footer />
        </>
        
    );
}
export default Destinations;