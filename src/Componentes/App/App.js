import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro.js';
import Produtos from '../Produtos/Produtos.js';
import Login from '../Login/Login.js';
import Perfil from '../Perfil/Perfil.js';
import TokenContext from '../Context/TokenContext.js';
import { useState } from 'react';

function App() {

    const [token, setToken] = useState('')

    return (
        <BrowserRouter>
            <TokenContext.Provider value={{ token, setToken }}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/perfil' element={<Perfil />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/produtos' element={<Produtos />} />
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
    );
}

export default App;
