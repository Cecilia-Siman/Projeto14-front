import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro.js';
import Produtos from '../Produtos/Produtos.js';
import Login from '../Login/Login.js';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/produtos' element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
