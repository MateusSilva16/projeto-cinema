import NavBar from '../components/Layout/Navbar/navBar.component';
import Games from './Games/games';

import Home from './Home/home';
import React, { useRef, useState } from 'react';
import Gallery from './Gallery/gallery';

export default function HomePage() {
  /* Scroll Navbar */

  const home = useRef(null);
  const gallery = useRef(null);
  const games = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsVisible(true);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  const scrollToSection = (elementRef: any) => {
    setIsVisible(false);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <NavBar
        isVisible={isVisible}
        closeMenu={closeMenu}
        openMenu={openMenu}
        home={() => scrollToSection(home)}
        gallery={() => scrollToSection(gallery)}
        games={() => scrollToSection(games)}
      />

      <Home homeRef={home} scroll={() => scrollToSection(gallery)}/>
      <Gallery galleryRef={gallery} />
      <Games gamesRef={games} />
    </>
  );
}
