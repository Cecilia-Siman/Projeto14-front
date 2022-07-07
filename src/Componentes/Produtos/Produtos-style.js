import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
padding: 0 20px;
box-sizing: border-box;
`

export const Cabecalho = styled.div`
width: 100%;
height: 60px;
position: fixed;
top: 0;
left: 0;
background-color: red;
`

export const Menu = styled.div`
height: 60px;
width: 100%;
margin-top: 60px;
position: fixed;
top: 0;
left: 0;
background-color: black;
`

export const Estante = styled.div`
margin-top: 130px;
`

export const Galaxia = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
background-color: purple;
margin-bottom: 50px;

h1 {
    width: 100%;
    font-size: 30px;
    text-align: center;
}
`
export const Painel = styled.div`
width: 100%;
height: 270px;
position: relative;
overflow: hidden;
overflow-x: scroll;
`

export const Estoque = styled.div`
height: 100%;
display: flex;
align-items: center;
position: absolute;
padding-left: 20px;
`


export const Produto = styled.div`
height: 250px;
width: 200px;
margin:0 40px 0 0;
padding: 20px 10px 0 10px;
background-color: white;
box-sizing: border-box;
`

export const Foto = styled.div`
display: flex;
margin-bottom: 20px;
justify-content: center;

img {
    height: 100px;
}
`

export const Informacoes = styled.div`

p {
    margin-bottom: 10px;
    font-size: 13px;
}
`