import { Container, Cabecalho, Menu, Estante, Galaxia, Painel, Estoque, Produto, Foto, Informacoes, Icones } from "./Produtos-style";
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TokenContext from '../Context/TokenContext.js';
import Loading from '../Loading/Loading.js'

function AdicionaGalaxia({ item, categoria, setCategoria, token }) {

    const produtos = item.estoque;

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
                alert('Produto já existe no carrinho')
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
    
    let navigate = useNavigate();

    const [categoria, setCategoria] = useState('')
    const [loading, setLoading] = useState(true);
    const [galaxias, setGalaxias] = useState([])

    const { token } = useContext(TokenContext)

    let navigate = useNavigate()

    useEffect(() => {
        // const config = {
        //     headers: {
        //         "Authorization": `Bearer ${token}`
        //     }
        // }

        const promise = axios.get('https://project-myuniverse.herokuapp.com/produtos')
            .then((res) => {
                setGalaxias(res.data)
                setLoading(false)
                console.log(res.data)
            })
            .catch(err => {
                alert('Ocorreu um erro ao carregar')
                navigate('/')
                console.log(err)
            })


    }, [])

    return (
        <Container>
            {loading ? <Loading /> : ''}
            <Cabecalho>
                <h1>My Universe</h1>
                <div>
                    <ion-icon name="cart" onClick={() => navigate('/carrinho')}></ion-icon>
                    <ion-icon name="exit"></ion-icon>
                </div>
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