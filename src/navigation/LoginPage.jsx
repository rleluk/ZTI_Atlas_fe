import React, { useState } from 'react';
import Menu from '../components/Menu';
import './LoginPage.css';


const SearchPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Menu/>
            <div className='Container LoginForm'>
                <form>
                    <input 
                        type='text' 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                        placeholder={'Email'}
                    />
                    <input 
                        type='text' 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        placeholder={'Hasło'}
                    />
                    
                    <button 
                        onClick={event => {
                            event.preventDefault();
                        }
                    }>
                        Zaloguj się
                    </button>
                </form>
                <div class="bubbles bubble-1"></div>
                <div class="bubbles bubble-5"></div>
                <div class="bubbles bubble-2"></div>
                <div class="bubbles bubble-6"></div>
                <div class="bubbles bubble-3"></div>
                <div class="bubbles bubble-7"></div>
                <div class="bubbles bubble-4"></div>
                <div class="bubbles bubble-8"></div>
            </div>
        </div>
    );
}

export default SearchPage;