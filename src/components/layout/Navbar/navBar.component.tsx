import React, { useState } from 'react';
import { FiAlignLeft, FiX } from 'react-icons/fi';
import { IoLogoPlaystation } from 'react-icons/io';
import { RiMovie2Line } from 'react-icons/ri';
import * as S from './navBar.styles';
import NavbarProps from './navBar.types';

const NavBar = ({
  home,
  gallery,
  games,
  isVisible,
  closeMenu,
  openMenu,
}: NavbarProps) => {
  return (
    <S.Conatiner>
      {isVisible ? (
        <>
          <S.Menu menuHanburguer={isVisible}>
            <S.ButtonClose>
              <FiX size={35} onClick={closeMenu} />
            </S.ButtonClose>

            <S.Header>
              <div>
                <RiMovie2Line size={30} />
                <IoLogoPlaystation size={30} />
              </div>
              Filmes e Games
            </S.Header>

            <S.Lista>
              <S.Item onClick={home}>Inicío</S.Item>
              <S.Item onClick={gallery}>Filmes</S.Item>
              <S.Item onClick={games}>Games</S.Item>
            </S.Lista>
          </S.Menu>
          <S.Overlay onClick={closeMenu} />
        </>
      ) : (
        <S.ButtonOpen>
          <FiAlignLeft size={30} onClick={openMenu} />
        </S.ButtonOpen>
      )}
    </S.Conatiner>
  );
};
export default NavBar;
