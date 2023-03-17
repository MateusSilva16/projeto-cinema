export default interface NavbarProps  {
    home?:() => void,
    gallery?:() => void,
    games?:() => void,
    openMenu?:() => void,
    closeMenu?:() => void,
    isVisible?:boolean,
}