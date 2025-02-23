import './HeroStyles.css'

function Hero(props) {
    
    return (
        <>
        <div className={props.cname}>
            <img src={props.heroImg} alt="hero" />

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            </div>
        </div>
        </>
    );
}
export default Hero;