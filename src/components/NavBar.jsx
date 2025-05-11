
import { Link } from 'react-router-dom';
import './NavBar.css';



function NavBar() {
    return (
    <nav className='navbar'>
        <Link to ="/" className='btn-nav'>Reservar vaga</Link> 
        <Link to="/vagas" className='btn-nav'>Vagas diponíveis</Link>
    </nav>
);
}

export default NavBar;
