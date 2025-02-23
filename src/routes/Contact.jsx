import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/don-kaveen-93IYznJPkOA-unsplash.jpg"
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact(){
    
    return (
        <>
        <Navbar />
            <Hero 
            cname = "hero-dest"
            heroImg = {ContactImg}
            title = "Contact"
            btnClass = "hide"
            />
        <ContactForm />
        <Footer />
        </>
    );
}
export default Contact;