import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
padding: 0 20px;
box-sizing: border-box;

form{ 
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
}

button{
    height: 30px;
    background-color: #6495ed;
    border: 0;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
}

img {
    position: fixed;
    height: 100%;
    left: 0;
    background-color: red;
    opacity: .3;
    object-fit: cover;
}
`

export const Cabecalho = styled.div`
margin-bottom:50px ;
z-index: 1;

h1{
    display: flex;
    justify-content: center;
    font-size: 50px;
    text-align: center;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
}
`

export const Voltar = styled.div`
width: 30px;
height: 30px;
position: fixed;
top: 20px;
left: 20px;
cursor: pointer;
background-color: #6495ed;
border-radius: 5px;
z-index: 1;
`