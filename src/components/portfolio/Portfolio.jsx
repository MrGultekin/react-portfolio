import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Charts Templates',
        // demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization',
        github: 'https://github.com',
        demo: 'https://as-like.web.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Charts ',
        github: 'https://github.com',
        demo: 'https://as-like.web.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: ' Templates',
        github: 'https://github.com',
        demo: 'https://as-like.web.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'C Templates',
        github: 'https://github.com',
        demo: 'https://as-like.web.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'C T',
        github: 'https://github.com',
        demo: 'https://as-like.web.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Charts Templates',
        github: 'https://github.com',
        demo: 'https://as-like.web.app/'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work </h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo}) =>{
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className={'btn'} target={'_blank'} rel="noreferrer">GitHub</a>
                                    <a href={demo} className={'btn btn-primary'} target={'_blank'}>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio;