import { Link } from "react-router-dom";
import './Menu.css';


const Menu = (props) => {
    return (
        <div className='Menu'>
            <Link to='/home' className='MenuItem'>
                Strona domowa
            </Link>
            <Link to='/view' className='MenuItem'>
                Przeglądaj ryby
            </Link>
            <Link to='/search' className='MenuItem'>
                Wyszukaj ryby
            </Link>
            <Link to='/create' className='MenuItem'>
                Dodaj rybę
            </Link>
            <Link to='/login' className='MenuItem Login'>
                Zaloguj się
            </Link>
        </div>
    );
}

export default Menu;