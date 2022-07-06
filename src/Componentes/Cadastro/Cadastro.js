import { Container, Cabecalho, Voltar } from "./Cadastro-style";
import { Input } from '../Input/Input.js'
import { useState } from "react";
import { IoReturnDownBack } from 'react-icons/io5';


function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confmacao, setConfirmacao] = useState('')

    function SignUp(event) {
        event.preventDefault();

        const senhasDiferentes = senha !== confmacao
        const senhaPequena = senha.length < 6

        if (senhasDiferentes || senhaPequena) {
            alert('Preencha os dados corretamente!!')
        }
        else {
            const body = {
                nome,
                email,
                senha
            }

            console.log(body)
        }

    }

    return (
        <Container>
            <Voltar>
                <IoReturnDownBack color="black" size={30} cursor='pointer' />
            </Voltar>
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
            <img src='https://t.ctcdn.com.br/ZqnG6CaMD_Hpfhlt2wheJRhqvRw=/512x288/smart/filters:format(webp)/i575834.png' alt="" />

        </Container>
    )
}

export default Cadastro;