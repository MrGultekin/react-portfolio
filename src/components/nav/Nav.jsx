import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageRoundedDots} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
const Nav = () => {
    return (
        <nav>
            <a href="#" className={'active'}><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><BiMessageRoundedDots/></a>
        </nav>
    )
}
export default Nav;