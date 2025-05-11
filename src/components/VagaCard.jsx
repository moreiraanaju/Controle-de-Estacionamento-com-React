import './VagaCard.css';

function VagaCard ({vaga, removerVaga}) {
    return (
        <div key={vaga.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <p><strong>Número da vaga:</strong> {vaga.numeroVaga}</p>
        <p><strong>Disponibilidade:</strong> {vaga.reservado ? 'Reservado' : 'Disponível'}</p>
        <p><strong>Nome:</strong> {vaga.nome}</p>
        <p><strong>Placa:</strong> {vaga.placaVeiculo}</p>

        <button onClick={() => removerVaga(vaga.id)}>Remover</button>
        </div>
    );
}

export default VagaCard;