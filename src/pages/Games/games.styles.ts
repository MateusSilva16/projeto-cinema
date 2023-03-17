import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
  background-image: linear-gradient(
    to top,
    ${tokens.colors.dark} 80%,
    ${tokens.colors.primary} 99%
  );
  color: ${tokens.colors.light};
`;

export const TitleSection = styled.h1`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  font-size: 40px;
  font-weight: 400;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ${tokens.colors.light};
  margin-top: 20px;
  padding-right: 20px;
  border-bottom: 1px solid ${tokens.colors.light};
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0;
  padding: 0;

   @media (max-width: 1024px) {
    grid-template-columns: auto auto auto;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 40px;
  }

  @media (max-width: 450px) {
    grid-template-columns: auto auto;
    gap: 20px;
  }

  @media (max-width: 390px) {
    grid-template-columns: auto;
    gap: 40px;
  }
`;

export const Card = styled.div<{ imgBackground?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 370px;
  background-image: linear-gradient(to bottom, transparent, transparent),
    ${(props: any) => props.imgBackground || 'url()'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 100%,
        transparent
      ),
      ${(props: any) => props.imgBackground || 'url()'};

    .imgIcon {
      animation: slide 0.5s forwards;

      @keyframes slide {
        from {
          margin-bottom: 0px;
        }

        to {
          margin-bottom: 100px;
        }
      }
    }

    .titleCard {
      display: flex;
      animation: title 0.5s forwards;

      @keyframes title {
        from {
          margin-top: 0px;
        }

        to {
          margin-top: 50px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 450px) {
    width: 170px;
    height: 170px;
  }

  @media (max-width: 390px) {
    width: 270px;
    height: 270px;
  }
`;

export const TitleCard = styled.div`
  display: none;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const ContainerImgIcon = styled.div<{
  sizeIcon?: string | number;
}>`
  position: absolute;
  width: ${(props: any) => props.sizeIcon || '200px'};
  height: ${(props: any) => props.sizeIcon || '200px'};

  @media (max-width: 1024px) {
    width: 270px;
    height: 170px;
  }

  @media (max-width: 768px) {
    width: 270px;
    height: 200px;
  }

  @media (max-width: 450px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 390px) {
    width: 250px;
    height: 300px;
  }
`;

export const ImgIcon = styled.img`
  position: relative;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
