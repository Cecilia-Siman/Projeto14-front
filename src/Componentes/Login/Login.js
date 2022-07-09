import { Container, Cabecalho } from './Login-style.js';
import { Input } from '../Input/Input.js'
import { useState, useContext } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TokenContext from '../Context/TokenContext.js';


function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { token, setToken } = useContext(TokenContext)

    let navigate = useNavigate();

    function SignIn(event) {
        event.preventDefault();

        const body = {
            email,
            senha
        }

        axios.post('https://project-myuniverse.herokuapp.com/', body)
            .then(res => {
                console.log(res.data);
                setToken(res.data)
                navigate('/produtos')
            })
            .catch(err => {
                alert(err);
            })

    }

    return (
        <Container>
            <Cabecalho>
                <h1>My Universe</h1>
            </Cabecalho>
            <form onSubmit={SignIn}>
                <Input placeholder="Email" type='email' onChange={(e) => { setEmail(e.target.value) }} required value={email} />
                <Input placeholder="Senha" type='password' onChange={(e) => { setSenha(e.target.value) }} required value={senha} />
                <button>Entrar</button>
            </form>
            <h2 onClick={() => navigate('/cadastro')}>Ainda não tenho cadastro</h2>
            <img src='https://t.ctcdn.com.br/ZqnG6CaMD_Hpfhlt2wheJRhqvRw=/512x288/smart/filters:format(webp)/i575834.png' alt="" />
        </Container>
    )
}

export default Login;