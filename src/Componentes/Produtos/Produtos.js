import { Container, Cabecalho, Menu, Estante, Galaxia, Painel, Estoque, Produto, Foto, Informacoes, Icones } from "./Produtos-style";
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TokenContext from '../Context/TokenContext.js';

function AdicionaGalaxia({ item, categoria, setCategoria, token }) {

    const produtos = item.estoque

    let newprod = produtos.filter(item => {
        if (item.tipo === categoria || categoria === '') {
            return item
        }
        else {
            return false
        }
    })

    function AdicionaCarrinho({ produto }) {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }


        axios.post('https://project-myuniverse.herokuapp.com/carrinho', produto, config)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function AdicionaDesejo() {
        alert('Função indisponível por enquanto!')
    }

    function AdicionaProduto({ produto }) {
        return (
            <Produto>
                <Foto>
                    <img src={produto.imagem} alt='' />
                </Foto>
                <Informacoes>
                    <p>Nome: {produto.nome}</p>
                    <p>Tipo: {produto.tipo}</p>
                    <p>R$ {produto.preco}</p>
                    <p>Descrição: {produto.descricao}</p>
                </Informacoes>
                <Icones>
                    <div>
                        <FiShoppingCart size={20} color="grey" cursor='pointer' onClick={() => AdicionaCarrinho({ produto })} />
                    </div>
                    <div>
                        <AiFillHeart size={20} color="red" cursor='pointer' onClick={AdicionaDesejo} />
                    </div>
                </Icones>
            </Produto>
        )
    }

    return (
        <Galaxia>
            <h1>{item.galaxia}</h1>
            <Painel>
                <Estoque>
                    {newprod.map((item, index) => <AdicionaProduto key={index} produto={item} />)}
                </Estoque>
            </Painel>
        </Galaxia>
    )
}

function Produtos() {

    const [categoria, setCategoria] = useState('')
    const [galaxias, setGalaxias] = useState([])

    const { token } = useContext(TokenContext)

    let navigate = useNavigate()

    // const galaxias = [
    //     {
    //         nome: 'Via Láctea',
    //         estoque: [
    //             {
    //                 imagem: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg',
    //                 nome: 'Marte',
    //                 tipo: 'Planeta',
    //                 preco: '15000',
    //                 descricao: 'Elon Musk ama'
    //             },
    //             {
    //                 imagem: 'https://s2.glbimg.com/zx5dlKpOcTOKZ6s4j6_3HNfm9fE=/e.glbimg.com/og/ed/f/original/2019/05/23/astronomy-discovery-earth-2422.jpg',
    //                 nome: 'Terra',
    //                 tipo: 'Planeta',
    //                 preco: '300000',
    //                 descricao: 'Vida inclusa'
    //             },
    //             {
    //                 imagem: 'https://super.abril.com.br/wp-content/uploads/2019/09/saturno.png',
    //                 nome: 'Saturno',
    //                 tipo: 'Planeta',
    //                 preco: '75000',
    //                 descricao: 'Anéis de compromisso'
    //             },
    //             {
    //                 imagem: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2019/08/netuno.jpg',
    //                 nome: 'Netuno',
    //                 tipo: 'Planeta',
    //                 preco: '15000',
    //                 descricao: 'Parece um smurf'
    //             }
    //         ]
    //     },
    //     {
    //         nome: 'Bode',
    //         estoque: [
    //             {
    //                 imagem: 'https://s2.glbimg.com/59Q0Xu-HkCRrY0OFBdDi_prC5Ko=/525x0:2351x1800/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/f/y/Tm9nhGTnucvVYqPLQz3A/bildschirmfoto-2022-04-12-um-10.50.41.png',
    //                 nome: 'SOl',
    //                 tipo: 'Estrela',
    //                 preco: '15000',
    //                 descricao: 'brilha'
    //             }
    //         ]
    //     },
    //     {
    //         nome: 'Andrômeda',
    //         estoque: [
    //             {
    //                 imagem: 'https://s2.glbimg.com/59Q0Xu-HkCRrY0OFBdDi_prC5Ko=/525x0:2351x1800/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/f/y/Tm9nhGTnucvVYqPLQz3A/bildschirmfoto-2022-04-12-um-10.50.41.png',
    //                 nome: 'SOl',
    //                 tipo: 'Estrela',
    //                 preco: '15000',
    //                 descricao: 'brilha'
    //             }
    //         ]
    //     },
    //     {
    //         nome: 'Triângulo',
    //         estoque: [
    //             {
    //                 imagem: 'https://s2.glbimg.com/59Q0Xu-HkCRrY0OFBdDi_prC5Ko=/525x0:2351x1800/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/f/y/Tm9nhGTnucvVYqPLQz3A/bildschirmfoto-2022-04-12-um-10.50.41.png',
    //                 nome: 'SOl',
    //                 tipo: 'Estrela',
    //                 preco: '15000',
    //                 descricao: 'brilha'
    //             }
    //         ]
    //     }

    // ]

    useEffect(() => {
        // const config = {
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // }

        const promise = axios.get('https://project-myuniverse.herokuapp.com/produtos')
            .then((res) => {
                setGalaxias(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })


    }, [])

    return (
        <Container>
            <Cabecalho>
                <h1>My Universe</h1>
                <FiShoppingCart size={30} color="grey" cursor='pointer' onClick={() => navigate('/carrinho')} />
                {/* <FaUserCircle size={30} cursor='pointer' /> */}
            </Cabecalho>
            <Menu>
                <p onClick={() => setCategoria('Estrela')}>Estrelas</p>
                <p onClick={() => setCategoria('Planeta')}>Planetas</p>
                <p onClick={() => setCategoria('Buraco negro')}>Buracos negros</p>
                <p onClick={() => setCategoria('Lua')}>Luas</p>
            </Menu>
            <Estante>
                {galaxias.map((item, index) => <AdicionaGalaxia key={index} item={item} categoria={categoria} setCategoria={setCategoria} token={token} />)}
            </Estante>
        </Container >
    )
}

export default Produtos;