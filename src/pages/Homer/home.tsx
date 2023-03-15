import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import * as S from '../Home/home.styles';

const Homer = ({ homeRef }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <S.Container ref={homeRef}>
      <S.Content>
        <S.ContainerCarousel>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
            <S.ContainerImg>
      
                <S.Image
                  src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/don_velozes_e_furiosos_6.jpg"
                  alt=""
                />
              </S.ContainerImg>
            </SwiperSlide>
            <SwiperSlide>
              <S.ContainerImg>
     
                <S.Image
                  src="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/don_velozes_e_furiosos_6.jpg"
                  alt=""
                />
              </S.ContainerImg>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </S.ContainerCarousel>
      </S.Content>
    </S.Container>
  );
};

export default Homer;
