import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro.js';
import Produtos from '../Produtos/Produtos.js';
import Login from '../Login/Login.js';
import Carrinho from '../Carrinho/Carrinho.js';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
