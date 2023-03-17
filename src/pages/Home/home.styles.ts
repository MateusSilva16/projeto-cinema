import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${tokens.colors.dark};
  color: ${tokens.colors.light};
  padding-top: 50px;

  @media (max-width: 450px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0) 10%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.3) 90%
  );
  position: absolute;
  z-index: 10;

  @media (max-width: 450px) {
    object-position: top;
    height: 100vh;
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px;
  height: 100%;
  width: 700px;

  h1 {
    font-size: 50px;
    margin: 0;
    padding-left: 10px;
    text-align: center;
    font-family: FontGame;
  }
  p {
    width: 100%;
    font-size: 15px;
    font-family: sans-serif;
    letter-spacing: 2px;
  }


`;

export const ButtonScroll = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  left: 5px;
  bottom: 40px;
  font-family: sans-serif;

  span {
    text-align: center;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 10px 0;
    padding: 0;
  }
`;
export const Icon = styled.div`
  position: relative;
  animation: icon 1s infinite;

  @keyframes icon {
    0% {
      top: 0px;
      opacity: 1;
    }
    100% {
      top: 10px;
      opacity: 0.1;
    }
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${tokens.colors.secondary2};
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: ${tokens.colors.secondary2};
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(80deg);
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
    width: 100%;
    gap: auto;
  }

  .swiper-pagination-bullet {
    background-color: gray;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: ${tokens.colors.secondary2};
    border-radius: 0;
  }

  --swiper-pagination-border-radius: 0px;
  --swiper-pagination-left: auto;
  --swiper-pagination-right: auto;
  --swiper-pagination-bottom: auto;
  --swiper-pagination-top: 0;
  --swiper-pagination-bullet-width: 100%;
  --swiper-pagination-bullet-height: 2px;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-opacity: 1;

  .swiper-button-next {
    background-color: transparent;
    color: ${tokens.colors.primary};
    width: 50px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid ${tokens.colors.primary};
  }

  .swiper-button-prev {
    background-color: transparent;
    color: ${tokens.colors.primary};
    width: 50px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid ${tokens.colors.primary};
  }

  --swiper-navigation-size: 0px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;


`;

export const ContainerImg = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 0px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-position: auto;
  object-fit: auto;

  @media (max-width: 767px) {
    object-fit: cover;
    object-position: bottom;
  }
`;
