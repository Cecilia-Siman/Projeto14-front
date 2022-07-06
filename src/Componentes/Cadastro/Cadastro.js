import { Container, Cabecalho } from "./Cadastro-style";
import { Input } from '../Input/Input.js'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confmacao, setConfirmacao] = useState('')

    let navigate = useNavigate();

    function SignUp(event) {
        event.preventDefault();

        const senhasDiferentes = senha !== confmacao
        const senhaPequena = senha.length < 6

        const body = {
            nome,
            email,
            senha
        }

        if (senhasDiferentes || senhaPequena) {
            alert('Preencha os dados corretamente!!')
        }
        else {

            axios.post('https://git.heroku.com/project-myuniverse.git/cadastro', body)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    alert(err)
                })

            console.log(body)
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
                <Input placeholder="Confirmar senha" type='password' onChange={(e) => { setConfirmacao(e.target.value) }} value={confmacao} />
                <button>Cadastrar</button>
            </form>
            <h2 onClick={() => navigate('/')}>Já sou cadastrado!!</h2>
            <img src='https://t.ctcdn.com.br/ZqnG6CaMD_Hpfhlt2wheJRhqvRw=/512x288/smart/filters:format(webp)/i575834.png' alt="" />

        </Container>
    )
}

export default Cadastro;