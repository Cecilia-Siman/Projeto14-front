import { useState } from "react";
import { Container, Botoes } from "./Perfil-style";
import { useNavigate } from 'react-router-dom'

function Perfil() {

    const [comprador, setComprador] = useState(true)

    let navigate = useNavigate()

    function corBotao(comprador) {
        if (comprador) {
            return '#6495ed'
        } else {
            return '#ffffff'
        }
    }

    return (
        <Container>
            <h1>Escolha seu perfil</h1>

            <Botoes comprador={() => corBotao(comprador)} vendedor={() => corBotao(!comprador)}>
                <button onClick={() => setComprador(true)}>
                    Comprador
                </button>
                <button onClick={() => setComprador(false)}>
                    Vendedor
                </button>
            </Botoes>
            <button onClick={() => {
                if (comprador) { navigate('/produtos') }
                else {
                    alert('Essa função estará disponível em breve!')
                    // navigate('/venda')
                }
            }}>Pronto</button>
        </Container>
    )
}

export default Perfil;