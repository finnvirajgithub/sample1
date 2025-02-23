import PackagesData from './PackagesData';
import './PackagesStyle.css'
import img1 from '../assets/promodhya-abeysekara-rdrGpquZ1Hc-unsplash.jpg'
import img2 from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg'
import img3 from '../assets/egle-sidaraviciute-ueBzLdRhhxQ-unsplash.jpg'

function Packages () {
    
    return (
        <div className="packages">
            <h1>Tour Packages</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ips</p>

            <div className="packagecard">
                <PackagesData 
                    image = {img1}
                    heading = "5 Day Tour"
                />
                <PackagesData 
                    image = {img2}
                    heading = "8 Day Tour"
                />
                <PackagesData 
                    image = {img3}
                    heading = "13 Day Tour"
                />
            </div>
        </div>
    );
}
export default Packages;