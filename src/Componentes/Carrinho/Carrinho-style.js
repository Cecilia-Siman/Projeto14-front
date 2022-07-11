import styled from 'styled-components'

export const Cabecalho = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
//border-bottom: solid 1px black;
box-shadow: 0px 0px 6px 4px #888888;
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
ion-icon {
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
}
`

export const Container = styled.div`
width: 100%;
height: 100%;
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;
position:relative;

h2{
    color:white;
    font-size:20px;
    margin-left:18px;
}
.deletar ion-icon{
    color:white;
    font-size:20px;
    
}
.deletar{
    position:absolute;
    top:0px;
    right:18px;
}

button{
    height: 40px;
    background-color: #6495ed;
    border: 0;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    color:white;
}
.encerrar{
    margin: 20px 18px 0px 18px;
}
`
export const Item = styled.div`
background:white;
margin: 20px 20px 0px 20px;
display:flex;
flex-direction: row;
justify-content:space-between;
//box-shadow: 0px 0px 6px 4px #888888;
padding:3px;
border-radius: 5px;

img{
    width: 120px;
    height:120px;
    object-fit: cover;
    border-radius: 5px;
}
div{
    display:flex;
    flex-direction:column;
    align-items: flex-end;
}
p{
    margin: 5px;
    color:blue;
}
ion-icon{
    color:#191970;
}
`
export const Form = styled.div`
//width: 100%;
display:flex;
justify-content: center;
//border: 2px solid white;
margin: 10px;
box-sizing: border-box;
position:relative;

ion-icon{
    position:absolute;
    top:5px;
    right:10px;
    font-size:24px;
    color:white;
}
form{
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
}

p{
    color:white;
    margin: 10px 0px;
}


`
