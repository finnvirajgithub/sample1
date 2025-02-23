import './ContactFormStyles.css'

function ContactForm (){
    
    return (
        <div className="form-container">
            <h1>Send a Message to us!</h1>
            <form action="">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Name'/>
                <textarea placeholder='Message' rows={4}></textarea>
                <button>Send Message</button>
            </form>
        </div>
    );
};
export default ContactForm;