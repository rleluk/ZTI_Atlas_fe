import { Link } from "react-router-dom";
import { authenticationService } from '../services/authentication';
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
            {
                authenticationService.checkAuthorization() ?
                <Link to='/create' className='MenuItem'>
                    Dodaj rybę
                </Link> : <></>
            }
            {
                authenticationService.checkAuthorization() ?
                <Link to='/home' className='MenuItem Login' onClick={authenticationService.logout}>
                    Wyloguj się
                </Link>
                :
                <Link to='/login' className='MenuItem Login'>
                    Zaloguj się
                </Link>
            }
            
        </div>
    );
}

export default Menu;