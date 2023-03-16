import styled from 'styled-components'
import tokens from '../../../utils/tokens'

export const Conatiner = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
height: 45px;
background-color: ${tokens.colors.primary};
color: ${tokens.colors.light};
padding: 0 20px;
position: fixed;
top: 0;
z-index: 10000;
`


export const Lista = styled.ul`
display: flex;
align-items: center;
justify-content: center;
margin: 0px;
padding: 0px;
`

export const Item = styled.li`
font-size: 18px;
font-family: Arial, Helvetica, sans-serif;
list-style: none;
padding: 10px; 
margin: 0;
font-weight: 100;
cursor: pointer;

:hover{
    border-bottom: 2px solid ${tokens.colors.secondary3};
    color: ${tokens.colors.secondary3};
}
`