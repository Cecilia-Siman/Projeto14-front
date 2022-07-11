import { Input } from '../Input/Input.js'
import {Item , Container , Form ,  Cabecalho} from './Carrinho-style.js'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Carrinho() {
    let navigate = useNavigate();
    const [finish, setFinish] = useState(false);
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [galaxia,setGalaxia] = useState("");
    const [planeta,setPlaneta] = useState("");
    const [referencia,setReferencia] = useState("");

    let total=0;
    let listProducts;

    axios.get('https://git.heroku.com/project-myuniverse.git/carrinho')
        .then(res => {
            listProducts = res.data;
        })
        .catch(err => {
            alert(err);
        })

    function DisplayItems(item){
        total += Number(item.preco);
        return (
            <Item>
            <img src={item.imagem} alt='' />
            <div>
                <ion-icon name="close-circle" onClick={()=> axios.delete('https://git.heroku.com/project-myuniverse.git/carrinho',{nome:item.nome})}></ion-icon>
                <p>{item.nome} - {item.tipo}</p>
                <p>R$ {item.preco}</p>
                <p className='Descricao'>{item.descricao}</p>
            </div>
            </Item>
        )
    }

    function ListItems(){
        /*const listProducts = [{
            imagem: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg',
            nome: 'Marte',
            tipo: 'Planeta',
            preco: '15000',
            descricao: 'Elon Musk ama'
        },
        {
            imagem: 'https://s2.glbimg.com/zx5dlKpOcTOKZ6s4j6_3HNfm9fE=/e.glbimg.com/og/ed/f/original/2019/05/23/astronomy-discovery-earth-2422.jpg',
            nome: 'Terra',
            tipo: 'Planeta',
            preco: '300000',
            descricao: 'Vida inclusa'
        },
        {
            imagem: 'https://super.abril.com.br/wp-content/uploads/2019/09/saturno.png',
            nome: 'Saturno',
            tipo: 'Planeta',
            preco: '75000',
            descricao: 'Anéis de compromisso'
        }];*/
        const listReturn = listProducts.map(DisplayItems);
        return listReturn;
    }

    function ConfirmarCompra(){
        return(alert("Compra concluída"));
    }

    function FormularioCompra(){
        return(
            <Form>
                <div>
                <ion-icon name="close-circle" onClick={()=> setFinish(!finish)}></ion-icon>
                <form onSubmit={ConfirmarCompra}>
                    <p className='sum'>Valor total da compra: R$ {total}</p>
                    <p>Confirme seus dados</p>
                    <Input placeholder="Confirme seu e-mail" type='email' onChange={(e) => { setEmail(e.target.value) }} required value={email} />
                    <Input placeholder="Confirme sua senha" type='password' onChange={(e) => { setSenha(e.target.value) }} required value={senha} />
                    <p>Informe o endereço para a entrega</p>
                    <Input placeholder="Galaxia" type='name' onChange={(e) => { setGalaxia(e.target.value) }} required value={galaxia} />
                    <Input placeholder="Planeta" type='name' onChange={(e) => { setPlaneta(e.target.value) }} required value={planeta} />
                    <Input placeholder="Referência" type='name' onChange={(e) => { setReferencia(e.target.value) }} value={referencia} />
                    <button>Confirmar compra</button>
                </form>
                </div>
            </Form>
        )
    }

    return (
        <>
        <Cabecalho>
                <h1>My Universe</h1>
                <div>
                    <ion-icon name="bag" onClick={() => navigate('/produtos')}></ion-icon>
                    <ion-icon name="exit"></ion-icon>
                </div>
        </Cabecalho>
        <Container>
            <h2>Seu carrinho</h2>
            <div className='deletar'>
                <ion-icon name="trash-outline" ></ion-icon>
            </div>
            <ListItems></ListItems>
            {finish ? <FormularioCompra></FormularioCompra> : <button className='encerrar' onClick={()=> setFinish(!finish)}>Encerrar compra</button>}
            
        </Container>
        </>
    )
}

