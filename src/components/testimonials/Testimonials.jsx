import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVT1,
        name: 'J.W. Boot',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aperiam commodi consequatur culpa cumque \n' +
            'dolorem est et facere fugit illo iusto labore laboriosam laudantium maiores modi natus, non nostrum omnis quae, \n' +
            'qui quia quidem recusandae rem sequi similique sunt tempora temporibus velit voluptas voluptatem voluptates voluptatibus.\n' +
            'Assumenda, provident!'
    },
    {
        avatar: AVT2,
        name: 'John Smith',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aperiam commodi consequatur culpa cumque \n' +
            'dolorem est et facere fugit illo iusto labore laboriosam laudantium maiores modi natus, non nostrum omnis quae, \n' +
            'qui quia quidem recusandae rem sequi similique sunt tempora temporibus velit voluptas voluptatem voluptates voluptatibus.\n' +
            'Assumenda, provident!'
    },
    {
        avatar: AVT3,
        name: 'Mc Gerry',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aperiam commodi consequatur culpa cumque \n' +
            'dolorem est et facere fugit illo iusto labore laboriosam laudantium maiores modi natus, non nostrum omnis quae, \n' +
            'qui quia quidem recusandae rem sequi similique sunt tempora temporibus velit voluptas voluptatem voluptates voluptatibus.\n' +
            'Assumenda, provident!'
    },
    {
        avatar: AVT4,
        name: 'Mrs.J. Rose',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad alias aperiam commodi consequatur culpa cumque \n' +
            'dolorem est et facere fugit illo iusto labore laboriosam laudantium maiores modi natus, non nostrum omnis quae, \n' +
            'qui quia quidem recusandae rem sequi similique sunt tempora temporibus velit voluptas voluptatem voluptates voluptatibus.\n' +
            'Assumenda, provident!'
    },
]


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="women 1"/>
                                </div>
                                <h5 className={'client__name'}>{name}</h5>
                                <small className="client__review"> {review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
export default Testimonials;