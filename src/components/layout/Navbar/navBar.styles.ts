import styled from 'styled-components';
import tokens from '../../../utils/tokens';

export const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${tokens.colors.primary};
  color: ${tokens.colors.light};
  padding: 0 8px;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0px 2px 10px rgba(0, 212, 255, 1);
`;

export const Menu = styled.div<{ menuHanburguer: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: ${(props: any) => (props.menuHanburguer ? '200px' : '0px')};
  height: 100vh;
  background: rgb(2, 0, 36);
  box-shadow: 2px 0px 7px rgba(0, 212, 255, 1);
  color: ${tokens.colors.light};
  padding: 20px 0;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: width 1s;
  animation: slide 1s forwards;

  @keyframes slide {
    to {
      transition: width 0.9s;
      opacity: 1;
    }
  }
`;

export const Lista = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
`;

export const Item = styled.li`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  padding: 5px 2px;
  margin: 5px 0;
  width: 100%;
  font-weight: 100;
  cursor: pointer;
  border-image: linear-gradient(
      to right,
      ${tokens.colors.secondary3},
      transparent
    )
    1;
  border-bottom: 2px solid ${tokens.colors.secondary3};
  :hover {
    color: ${tokens.colors.secondary3};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin-top: 40px;
  padding: 0px;
  width: 100%;
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
  color: ${tokens.colors.light};
  background-color: transparent;
  border: none;
`;

export const ButtonOpen = styled.button`
  cursor: pointer;
  color: ${tokens.colors.light};
  background-color: transparent;
  border: none;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.9);
`;
