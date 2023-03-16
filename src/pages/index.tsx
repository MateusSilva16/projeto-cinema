import NavBar from '../components/Layout/Navbar/navBar.component';
import Contatos from './Contatos/contatos';

import Home from './Home/home';
import React, { useRef } from 'react';
import Gallery from './Gallery/gallery';

export default function HomePage() {
  /* Scroll Navbar */

  const home = useRef(null);
  const gallery = useRef(null);
  const contatos = useRef(null);


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

        <Home homeRef={home}/>
        <Gallery galleryRef={gallery}/>
        <Contatos contatosRef={contatos}/>
    </>
  );
}
