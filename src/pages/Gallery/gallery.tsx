import React, { useState } from 'react';
import Modal from '../../components/Modal/modal.component';
import { GalleryData } from './gallery.data';
import * as S from './gallery.styles';

const Gallery = ({ galleryRef }) => {
  const [openModal, setOpenModal] = useState(false);
  const [imgModal, setImgModal] = useState('');
  const [title, setTile] = useState('');
  const [description, setDescription] = useState('');

  const Close = () => {
    setOpenModal(false);
    console.log('fechar');
  };

  return (
    <>
      {openModal ? (
        <Modal imgBackground={imgModal} close={Close}>
          <S.ModalContainer>
            <S.TitleModal>{title}</S.TitleModal>
            <S.DescriptionModal>{description}</S.DescriptionModal>
          </S.ModalContainer>
        </Modal>
      ) : null}

      <S.Container ref={galleryRef}>

        <S.TitleSection>Filmes e Animes</S.TitleSection>

        <S.Content>
          <S.Lista>
            {GalleryData.map((item,index) => {
              return (
                <S.Item
                key={index}
                  onClick={() => {
                    setOpenModal(true);
                    setImgModal(item.bgModal);
                    setTile(item.title);
                    setDescription(item.description);
                  }}
                >
                  <S.Image src={item.src} alt={item.alt} />
                 {/*  <S.Title>{item.title}</S.Title> */}
                </S.Item>
              );
            })}
          </S.Lista>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Gallery;
