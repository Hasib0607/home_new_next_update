import { Navigation, A11y, EffectFade, Autoplay, Controller, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const DefaultSlider = ({ nextEl, prevEl, children, breakpoints, pagination, paginationType }) => {
    return (

        <Swiper
            autoplay={{ delay: 2500, autoplayDisableOnInteraction: false }}
            speed={1000}
            modules={[Autoplay, A11y, EffectFade, Navigation, Controller, Pagination]}
            breakpoints={breakpoints}
            pagination={{
                pagination,
                type: paginationType,
            }}
            navigation={{
                prevEl: `.${prevEl}`,
                nextEl: `.${nextEl}`,
            }}
            className="mySwiper"
        >
            {children}
        </Swiper>

    );
};

export default DefaultSlider;