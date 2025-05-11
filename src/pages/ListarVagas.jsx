
import Header from "../components/Header";
import VagaCard from "../components/VagaCard";

function ListarVagas({ vagas, removerVaga }) {

    return (
        <div>
            <Header subtitulo="Vagas cadastradas" />
            <div className="vaga-grid">
            {vagas.map((vaga) => (
                  <VagaCard key={vaga.id} vaga={vaga} removerVaga={removerVaga} />
            ))} 
            </div>
        </div>
);
}

export default ListarVagas;