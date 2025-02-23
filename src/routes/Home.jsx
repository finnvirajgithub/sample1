import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";

function Home(){
    
    return (
        <>
        <Navbar />
            <Hero 
            cname = "hero"
            heroImg = "src/assets/11.jpg"
            title = "Your Journy Your Story"
            text = "Make Your Dream Tour With Us"
            url = "/"
            btnText = "Book the Tour"
            btnClass = "show"
            />
        <Destination />
        <Packages />
        <Footer />
        </>
    );
}
export default Home;