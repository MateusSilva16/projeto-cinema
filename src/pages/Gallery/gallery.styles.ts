import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, ${tokens.colors.primary} 20%, ${tokens.colors.secondary} 90%);
  color: ${tokens.colors.light};
  padding: 40px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 95%;
  color: ${tokens.colors.dark};
  object-position: bottom;
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${tokens.colors.dark};
  margin: 0;
  padding: 0;
  /* overflow-y: scroll; */
`;

export const Item = styled.li`
  list-style: none;
  color:  ${tokens.colors.light};
  text-align: center;
  background-color:  ${tokens.colors.dark};
  height: 200px;
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
 font-family: sans-serif;
 font-size: 11px;
 text-align: center;
 padding: 0 2px;
 margin:5px 0;
 font-weight: 100;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 180px;
  width:100%;
`;
