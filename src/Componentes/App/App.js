import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro.js';
import Produtos from '../Produtos/Produtos.js';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/produtos' element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
