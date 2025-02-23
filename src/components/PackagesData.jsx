function PackagesData(props) {
    
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />
                <h4>{props.heading}</h4>
            </div>
            
        </div>
    );
};
export default PackagesData;