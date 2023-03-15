import React from "react"
import { Container } from "./contatos.styles"


const Contatos = ({contatosRef}) => {
    return(
        <Container ref={contatosRef}>
            Contatos
        </Container>
    )
}

export default Contatos