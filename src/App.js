import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Listagem from './pages/Listagem';
import Cadastro from './pages/Cadastro';
import Edicao from './pages/Edicao';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <Link to="/">Gerenciador de tarefas</Link>
        <Link to="/cadastro" className="btn-new">nova tarefa +</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Listagem />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/editar/:id" element={<Edicao />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;