import './contact.css'
import {HiOutlineMail} from "react-icons/hi";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className={'contact__option-icon'}/>
                        <h4>Email</h4>
                        <h5>gultekin.de@gmail.com</h5>
                        <a href="mailto:gultekin.de@gmail.com" target={'_blank'}>Send a mail</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className={'contact__option-icon'}/>
                        <h4>Messenger</h4>
                        <h5>Facebook Message</h5>
                        <a href="https://m.me/is.mr.rose" target={'_blank'}>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className={'contact__option-icon'}/>
                        <h4>WhatsApp </h4>
                        <h5>Instant Communication</h5>
                        <a href="https://api.whatsapp.com/send?phone=00491774562963" target={'_blank'}>Send a message</a>
                    </article>
                </div>
                {/*==============================End Of Contact Option===============================*/}
                <form action="">
                    <input type="text" name={'name'} placeholder="Your Full Name" required/>
                    <input type="email" name={'email'} placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary btn-contact">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;