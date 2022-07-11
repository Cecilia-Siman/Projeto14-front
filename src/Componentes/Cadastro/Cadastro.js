import { Container, Cabecalho } from "./Cadastro-style";
import { Input } from '../Input/Input.js'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacao, setConfirmacao] = useState('')

    let navigate = useNavigate();

    function SignUp(event) {
        event.preventDefault();

        const senhasDiferentes = senha !== confirmacao
        const senhaPequena = senha.length < 6

        const body = {
            name: nome,
            email,
            password: senha,
            passwordConfirm: confirmacao
        }

        if (senhasDiferentes || senhaPequena) {
            alert('Preencha os dados corretamente!!')
        }
        else {

            axios.post('https://project-myuniverse.herokuapp.com/cadastro', body)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    alert(err)
                })
        }

    }

    return (
        <Container>
            <Cabecalho>
                <h1>My Universe</h1>
            </Cabecalho>
            <form onSubmit={SignUp}>
                <Input placeholder="Nome" type='text' onChange={(e) => { setNome(e.target.value) }} value={nome} />
                <Input placeholder="Email" type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                <Input placeholder="Senha" type='password' onChange={(e) => { setSenha(e.target.value) }} value={senha} />
                <Input placeholder="Confirmar senha" type='password' onChange={(e) => { setConfirmacao(e.target.value) }} value={confirmacao} />
                <button>Cadastrar</button>
            </form>
            <h2 onClick={() => navigate('/')}>Já sou cadastrado!!</h2>
            <img src='https://t.ctcdn.com.br/ZqnG6CaMD_Hpfhlt2wheJRhqvRw=/512x288/smart/filters:format(webp)/i575834.png' alt="" />

        </Container>
    )
}

export default Cadastro;