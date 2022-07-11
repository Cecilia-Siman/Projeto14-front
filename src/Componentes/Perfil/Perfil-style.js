import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
padding: 0 20px;
box-sizing: border-box;

h1 {
    font-size: 30px;
    margin-bottom: 20px;
}

button {
    width: 320px;
    height: 50px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FFFFFF;
}
`

export const Botoes = styled.div`
display: flex;
margin-bottom: 20px;

button {
    width: 150px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    font-size: 20px;
    margin: 0 10px;
    cursor: pointer;
}

button:first-child{
    background-color: ${(props) => props.comprador};
}

button:last-child{
    background-color: ${(props) => props.vendedor};
}
`