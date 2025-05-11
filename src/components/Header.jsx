import './header.css';

function Header({ subtitulo }) {
  return (
    <div className="header-container">
        <h1 className="titulo-principal">Park Control</h1>
        <h2 className="titulo-secundario">{subtitulo}</h2>
    </div>
  );
}

export default Header;

