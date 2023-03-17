import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const Container = styled.div<{ imgBackground?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0) ,
      rgba(0, 0, 0, 0.5) 
    ),
    ${(props: any) => props.imgBackground || ' url()'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: auto;
  object-position: top;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  top: 0;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }

`;

export const Close = styled.button`
  border: none;
  background-color: transparent;
  color: ${tokens.colors.light};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
