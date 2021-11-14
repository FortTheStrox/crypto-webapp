import './../style/App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <header>
            <h1 className="logo">CryptoKeep</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
            <nav>
                <ul>
                    <li><NavLink className="NavLink" to="/">Home</NavLink></li>
                    <li><NavLink className="NavLink" to="/about">About</NavLink></li>
                    <li><NavLink className="NavLink" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </header>
    );
}
 
export default Navigation;