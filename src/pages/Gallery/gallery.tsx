import React from 'react';
import { GalleryData } from './gallery.data';
import * as S from './gallery.styles';

const Gallery = ({ galleryRef }) => {
  return (
    <S.Container ref={galleryRef}>
      <S.Content>
        <S.Lista>
          {GalleryData.map((item) => {
            return (
              <S.Item>
                <S.Image src={item.src} alt={item.alt} />
                <S.Title>{item.title}</S.Title>
              </S.Item>
            );
          })}
        </S.Lista>
      </S.Content>
    </S.Container>
  );
};

export default Gallery;
