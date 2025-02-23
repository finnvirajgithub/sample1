import DestinationData from './DestinationData';
import './DestinationStyles.css'
import Sigiriya1 from '../assets/sigiriya.jpg'
import Sigiriya2 from '../assets/sigiriya2.jpg' 
import Yala1 from '../assets/geoff-brooks-3TwThGdEUZA-unsplash.jpg'
import Yala2 from '../assets/5.jpg' 

const Destination = () => {
    
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis provident excepturi </p>

            <DestinationData 
                className = "first-dest"
                heading = "Sigiriya"
                text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatem obcaecati ullam quibusdam iste culpa corporis ipsum cum ratione id dolorum molestias pariatur sunt sed reiciendis odit, quas, totam voluptatum in beatae. Repellat deleniti illum nulla in tenetur similique, mollitia inventore soluta alias itaque! Veritatis nam quasi delectus possimus ea?"
                img1 = {Sigiriya1}
                img2 = {Sigiriya2}
            />

            <DestinationData 
                className = "first-dest-reverce"
                heading = "Yala National Park"
                text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatem obcaecati ullam quibusdam iste culpa corporis ipsum cum ratione id dolorum molestias pariatur sunt sed reiciendis odit, quas, totam voluptatum in beatae. Repellat deleniti illum nulla in tenetur similique, mollitia inventore soluta alias itaque! Veritatis nam quasi delectus possimus ea?"
                img1 = {Yala1}
                img2 = {Yala2}
            />
            
        </div>
    );
};
export default Destination;