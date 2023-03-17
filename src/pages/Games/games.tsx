import React from 'react';
import { GamesData } from './games.data';
import * as S from './games.styles';

const Games = ({ gamesRef }) => {
  return (
    <S.Container ref={gamesRef}>
      <S.TitleSection>Games</S.TitleSection>

      <S.Lista>
        {GamesData.map((item, index) => {
          return (
            <S.Card imgBackground={item.src} key={index}>
              <S.ContainerImgIcon
                className={'imgIcon'}
                sizeIcon={item.sizeIcon}
              >
                <S.ImgIcon src={item.imgIcon} />
              </S.ContainerImgIcon>
              <S.TitleCard className={'titleCard'}>{item.title}</S.TitleCard>
            </S.Card>
          );
        })}
      </S.Lista>
    </S.Container>
  );
};

export default Games;
