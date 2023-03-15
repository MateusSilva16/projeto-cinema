import NavBar from '../components/layout/Navbar/navBar.component';
import Contatos from './Contatos/contatos';
import Gallery from './Gallery/gallery';
import Homer from './Home/home';
import React, { useRef } from 'react';

export default function HomePage() {
  /* Scroll Navbar */

  const home = useRef(null);
  const gallery = useRef(null);
  const contatos = useRef(null);
  let menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <NavBar
        home={() => scrollToSection(home)}
        gallery={() => scrollToSection(gallery)}
        contatos={() => scrollToSection(contatos)}
      
      />

        <Homer homeRef={home}/>
        <Gallery galleryRef={gallery}/>
        <Contatos contatosRef={contatos}/>
    </>
  );
}
