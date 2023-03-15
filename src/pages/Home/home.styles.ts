import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color:  ${tokens.colors.secondary};
  color:  ${tokens.colors.dark};
  padding-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 99%;
  padding: 10px;
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
    color:  ${tokens.colors.light};
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
    stroke:  ${tokens.colors.primary};
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
    gap: 50px;
  }

  .swiper-pagination-bullet {
    background-color: gray;
    border-radius: 0;
  }

  .swiper-pagination-bullet-active {
    background-color:  ${tokens.colors.primary};
    border-radius: 0;
  }

  --swiper-pagination-color:  ${tokens.colors.primary};
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
    color:  ${tokens.colors.primary};
    width: 50px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid  ${tokens.colors.primary};
  }

  .swiper-button-prev {
    background-color: transparent;
    color:  ${tokens.colors.primary};
    width: 50px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid  ${tokens.colors.primary};
  }

  --swiper-navigation-size: 0px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
`;

export const ContainerImg = styled.div`
  display: flex;
  height: 95%;
  width: 85%;
  margin-top: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-position: bottom;
`;
