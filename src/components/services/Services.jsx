import './services.css'
import {BiCheck} from "react-icons/bi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container service__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/*================================ End Of UI/UX =============================*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/*================================ End Of WEB =============================*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                        <li>
                            <BiCheck className={'service__list-icon'}/>
                            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/*================================ End Of Content Creation =============================*/}

            </div>
        </section>
    )
}
export default Services;