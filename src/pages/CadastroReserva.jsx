import Header from "../components/Header";
import { useState } from 'react';

function Cadastro({vagas, setVagas}) {
  const [nome, setNome] = useState('');
  const [numeroAp, setNumeroAp] = useState('');
  const [blocoAp, setBlocoAp] = useState('');
  const [placaVeiculo, setPlacaVeiculo] = useState('');
  const [modeloVeiculo, setModeloVeiculo] = useState('');
  const [corVeiculo, setCorVeiculo] = useState('');
  const [numeroVaga, setNumeroVaga] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  
    const novaVaga = {
      id: vagas.length + 1,
      nome,
      numeroAp,
      blocoAp,
      placaVeiculo,
      modeloVeiculo,
      corVeiculo,
      numeroVaga,
      reservado: true,
    };
  
    setVagas([...vagas, novaVaga]);
  
    console.log('Nova vaga cadastrada:', novaVaga);
    alert('Cadastro realizado com sucesso!');
  
    // limpar campos depois
    setNome('');
    setNumeroAp('');
    setBlocoAp('');
    setPlacaVeiculo('');
    setModeloVeiculo('');
    setCorVeiculo('');
    setNumeroVaga('');
  }
  

  return (
    <div>
      <Header subtitulo="Reserve uma vaga" />
      <form id="cadastro_reserva" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do proprietário</label>
        <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

        <label htmlFor="numero_ap">Número do apartamento</label>
        <input type="number" id="numero_ap" name="numero_ap" value={numeroAp} onChange={(e) => setNumeroAp(e.target.value)} />

        <label htmlFor="bloco_ap">Bloco do apartamento</label>
        <input type="number" id="bloco_ap" name="bloco_ap" value={blocoAp} onChange={(e) => setBlocoAp(e.target.value)} />

        <label htmlFor="placa_veiculo">Placa do veículo</label>
        <input type="text" id="placa_veiculo" name="placa_veiculo" value={placaVeiculo} onChange={(e) => setPlacaVeiculo(e.target.value)} />

        <label htmlFor="modelo_veiculo">Modelo do veículo</label>
        <input type="text" id="modelo_veiculo" name="modelo_veiculo" value={modeloVeiculo} onChange={(e) => setModeloVeiculo(e.target.value)} />

        <label htmlFor="cor_veiculo">Cor do veículo</label>
        <input type="text" id="cor_veiculo" name="cor_veiculo" value={corVeiculo} onChange={(e) => setCorVeiculo(e.target.value)} />

        <label htmlFor="numero_vaga">Número da vaga</label>
        <input type="number" id="numero_vaga" name="numero_vaga" value={numeroVaga} onChange={(e) => setNumeroVaga(e.target.value)} />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastro;
