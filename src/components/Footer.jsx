import { Link } from 'react-router-dom';
import './FooterStyles.css'
import SoSrilanka from '../assets/sosrilanka.png'
import Tripadvisor from '../assets/tourradar.png'
import tourradar from '../assets/tripadvisor.png'

const Footer = () => (
    
    <footer className='footer '>
        <div className="upper-side">

            <div className="left-side">
                <div className="nav-links">
                    <ul className="footer-nav-links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                    </ul>
                </div>
                <div className="contact-details">
                    <p>Phone: +94 77 700 8810</p>
                    <p>Address: 234, Nugagaha road, Katunayake</p>
                    <p>Email: <a href="mailto:admin@lankanaturalhabitat.com">admin@lankanaturalhabitat.com</a></p>
                </div>
            </div>
            <div className="right-side">
                <img src={SoSrilanka} alt="sltda" />
                <img src={Tripadvisor} alt="tourradar" />
                <img src={tourradar} alt="tripadvisor" />

            </div>


        </div>
        <div className="bottom-side">
            <div className="icon-shortcuts">
                <a href="https://www.facebook.com/profile.php?id=61565617417766" className="icon-link">
                <i className='bx bxl-facebook' ></i>
                </a>
                <a href="https://www.tripadvisor.com/Attraction_Review-g1500185-d28253710-Reviews-Lanka_Natural_Habitat_Lnh-Katunayake_Negombo_Western_Province.html" className="icon-link">
                <i className='bx bxl-trip-advisor' ></i>
                </a>
            </div>
            <div className="copyright">
            Copyright © 2024 lankanaturalhabitat. All rights reserved | <a href="https://www.facebook.com/profile.php?id=61561737224959">Return Zero Solutions</a>
            </div>
        </div>
    </footer>

)
export default Footer;
