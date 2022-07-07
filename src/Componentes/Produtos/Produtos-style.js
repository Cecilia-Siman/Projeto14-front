import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
padding: 0 20px 0 20px;
box-sizing: border-box;
`

export const Cabecalho = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
border-bottom: solid 1px black;
position: fixed;
top: 0;
left: 0;
background-color: white;
z-index: 1;
box-sizing: border-box;

h1 {
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
}
`

export const Menu = styled.div`
height: 40px;
width: 100%;
display: flex;
align-items: center;
margin-top: 70px;
position: absolute;
left: 0;
border-top: solid  1px #6495ed;
border-bottom: solid  1px #6495ed;

p:last-child{
    border-right: 0;
}

p {
    color: #6495ed;
    margin-left: 10px;
    padding-right: 10px;
    border-right: solid 1px #6495ed;
    text-align: center;
    cursor: pointer;
}
`

export const Estante = styled.div`
margin-top: 120px;
`

export const Galaxia = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: #6495ed;
margin-bottom: 50px;
border-radius: 5px;

h1 {
    width: 100%;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    padding-top: 10px;
}
`
export const Painel = styled.div`
width: 100%;
height: 350px;
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
height: 300px;
width: 200px;
margin:0 40px 0 0;
padding: 20px 10px 0 10px;
background-color: white;
box-sizing: border-box;
border-radius: 5px;
`

export const Foto = styled.div`
display: flex;
margin-bottom: 20px;
justify-content: center;

img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
}
`

export const Informacoes = styled.div`

p {
    margin-bottom: 10px;
    font-size: 15px;
}
`

export const Icones = styled.div`
display: flex;
justify-content: end;
margin-top: 20px;

div {
    margin:0 10px;
}
`