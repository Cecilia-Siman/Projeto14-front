import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from '../Cadastro/Cadastro.js';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
