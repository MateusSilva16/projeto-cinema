import * as S from './home.styles';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { HomeData } from './home.data';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

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
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            /*   navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }} */
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {HomeData.map((item, index) => {
              return (
                <SwiperSlide>
                  <S.ContainerImg key={index}>
                    <S.Image src={item.src} alt={item.alt} />
                  </S.ContainerImg>
                </SwiperSlide>
              );
            })}
            <div className="swiper-pagination"></div>
            {/* <div className="swiper-button-next">
              <MdSkipNext size={30} />
            </div> 
            <div className="swiper-button-prev">
              <MdSkipPrevious size={30} />
            </div> */}
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
