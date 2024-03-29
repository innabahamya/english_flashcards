import './header.scss';
import logo from '../../resources/img/logo-flashlingo.png';

function Header() {
return (
    <header className='header'>
        <nav className="navbar">
        <img src={logo} alt="logo" />
        <p>Searche</p>
        <p>Log In</p>
        <p>Sign Up</p>
        </nav>
        
        <h1>I'm learning English by flash cards</h1>
    </header>
)
}

export default Header