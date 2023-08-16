/* eslint-disable @next/next/no-img-element */
const SwiperSlide = ({ src = "" }) => {
    return (
        <swiper-slide class="h-full ">
            <img src={src} className="w-full object-cover h-full" alt="slider" />
        </swiper-slide>
    );
};

export default SwiperSlide;
