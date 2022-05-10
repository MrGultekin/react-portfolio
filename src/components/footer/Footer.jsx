import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer>
                <a href="#" className={'footer__logo'}>Mr.Rose</a>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experince</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.facebook.com/"><FaFacebookF/></a>
                    <a href="https://www.instagram.com/"><FiInstagram/></a>
                    <a href="https://www.twitter.com/"> <IoLogoTwitter/></a>
                </div>
                <div className="footer__copyright">
                    <small>&copy; 2023 Portfolio. All rights reserved.</small>
                </div>
            </footer>
        </div>
    )

}
export default Footer;