import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/CadastroReserva';
import ListarVagas from './pages/ListarVagas';
import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [vagas, setVagas] = useState([
    {
      id: 1,
      reservado: true,
      nome: 'Ana',
      numeroVaga: 101,
      placaVeiculo: 'ABC-1234',
    },
    {
      id: 2,
      reservado: true,
      nome: 'João',
      numeroVaga: 102,
      placaVeiculo: 'XYZ-9876',
    },
    {
      id: 3,
      reservado: true,
      nome: 'Maria',
      numeroVaga: 103,
      placaVeiculo: 'KLM-5678',
    },
    {
      id: 4,
      numeroVaga: 102,
      reservado: false,
    },
    {
      id: 5,
      numeroVaga: 102,
      reservado: false,
    },
    {
      id: 6,
      numeroVaga: 102,
      reservado: false,
    },
  ]);

  function removerVaga(id) {
    const vagasFiltradas = vagas.filter((vaga) => vaga.id !== id);
    setVagas(vagasFiltradas);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Cadastro vagas={vagas} setVagas={setVagas} />}
        />
        <Route
          path="/Vagas"
          element={<ListarVagas vagas={vagas} removerVaga={removerVaga} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
