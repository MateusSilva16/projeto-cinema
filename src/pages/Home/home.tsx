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
import { BsArrowDown } from 'react-icons/bs';
import HomeProps from './home.types';

const Homer = ({ homeRef, scroll }: HomeProps) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <S.Container ref={homeRef}>
      <S.Content>
        <S.ContainerDescription>
          <S.ContentDescription>
            <h1>Site </h1>
            <h1>Filmes e </h1>
            <h1>Games </h1>
            <p>
              Conheça alguns filmes e jogos, no qual existe detalhes de cada
              um. Foram escolhidos pelo próprio desenvolvedor do site tendo em
              vista que não são todos do mundo, mas são do meu agrado
            </p>
            <S.ButtonScroll onClick={scroll}>
              <span>Scroll para saber mais</span>
              <S.Icon>
                <BsArrowDown />
              </S.Icon>
            </S.ButtonScroll>
          </S.ContentDescription>
        </S.ContainerDescription>
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
                <SwiperSlide key={index}>
                  <S.ContainerImg >
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
