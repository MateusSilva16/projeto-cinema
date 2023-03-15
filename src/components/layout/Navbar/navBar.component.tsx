import React from "react"
import {BiCameraMovie} from 'react-icons/bi'
import { Conatiner, Item, Lista } from "./navBar.styles"
import NavbarProps from "./navBar.types"



const NavBar = ({home,gallery,contatos}:NavbarProps) => {
    return(
        <Conatiner>
            <BiCameraMovie size={30}/>
            <Lista>
                <Item onClick={home}>Inicío</Item>
                <Item onClick={gallery}>Filmes</Item>
                <Item onClick={contatos}>Contatos</Item>
            </Lista>
        </Conatiner>
    )
}
export default NavBar