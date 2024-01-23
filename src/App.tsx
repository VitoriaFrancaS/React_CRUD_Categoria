import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './Components/footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import CategoriaList from './Components/Categorias/CategoriaList/CategoriaList';
import FormularioCategoria from './Components/TemaCategoria/FormularioCategoria/FormularioCategoria';
import DeletarCategoria from './Components/Categorias/DeletarCategoria/DeletarCategoria';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/categoria" element={< CategoriaList />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;