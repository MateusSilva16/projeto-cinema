import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    ${tokens.colors.dark} 20%,
    ${tokens.colors.primary} 100%
  );
  color: ${tokens.colors.light};
  padding: 20px 0;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 95%;
  color: ${tokens.colors.dark};
  object-position: bottom;
`;

export const TitleSection = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 400;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: ${tokens.colors.light};
  margin: 50px 0;
  padding: 10px;
  border-bottom: 1px solid ${tokens.colors.light};
  border-top: 1px solid ${tokens.colors.light};
`;

export const Lista = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  gap: 30px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto auto auto auto auto auto;
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto auto auto auto;
    gap: 15px;
  }

  @media (max-width: 450px) {
    grid-template-columns: auto auto auto;
    gap: 15px;
  }

  @media (max-width: 390px) {
    grid-template-columns: auto;
    gap: 50px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: ${tokens.colors.light};
  text-align: center;
  background-color: ${tokens.colors.dark};
  color: ${tokens.colors.light};
  height: 200px;
  width: 110px;
  cursor: pointer;

  :hover {
    background-color: ${tokens.colors.secondary3};
    color: ${tokens.colors.dark};
    border: 1px solid ${tokens.colors.dark};
    transform: scale(1.2);
    text-transform: uppercase;
    font-size: 5px;
    h2 {
      font-size: 8px;
      font-weight: bold;
    }
  }

  @media (max-width: 390px) {
    height: 370px;
    width: 300px;
  }
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-size: 11px;
  text-align: center;
  padding: 0 2px;
  margin: 5px 0;
  font-weight: 100;
  width: 100%;


  @media (max-width: 390px) {
    font-size: 20px;
  }
  padding: 10px 0;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

/* Modal */

export const ModalContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  /*   background-color: rgba(0, 0, 0, 0.1); */
  color: ${tokens.colors.light};
  flex-direction: column;
  padding: 90px 0;
`;

export const TitleModal = styled.h1`
  margin-bottom: 100px;
  font-size: 40px;
  text-transform: uppercase;
`;

export const DescriptionModal = styled.h2`
  margin: 0;
  font-size: 15px;
  text-align: center;
  width: 80%;
`;
