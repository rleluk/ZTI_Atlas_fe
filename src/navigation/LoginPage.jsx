import React, { useState } from 'react';
import Menu from '../components/Menu';
import history from '../services/history';
import { authenticationService } from '../services/authentication';
import './LoginPage.css';


const login = async (email, password) => {
    const credentials = {
        "email": email,
        "password": password
    };
    
    await fetch(process.env.REACT_APP_URI + '/authenticate', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(credentials)
        })
        .then(async res => {
            if (res.status !== 200) {
                alert('Nieprawidłowe dane logowania.');
                console.log(res);
            } else {
                const json = await res.json();
                localStorage.setItem('authToken', json.token);  
                history.push('/home');
            }
        })
        .catch(err => console.log(err));
}


const validateEmail = (email) => {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(String(email).toLowerCase());
}


const LoginPage = (props) => {
    if (authenticationService.checkAuthorization())
        history.push('/home');

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
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+" 
                        title="Invalid format of email address"
                        placeholder={'Email'}
                    />
                    <input 
                        type='password' 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        placeholder={'Hasło'}
                    />
                    
                    <button 
                        onClick={event => {
                            if (email !== '' && password !== '' && validateEmail(email)) {
                                event.preventDefault();
                                login(email, password);
                            }
                        }
                    }>
                        Zaloguj się
                    </button>
                </form>
                <div className="bubbles bubble-1"></div>
                <div className="bubbles bubble-5"></div>
                <div className="bubbles bubble-2"></div>
                <div className="bubbles bubble-6"></div>
                <div className="bubbles bubble-3"></div>
                <div className="bubbles bubble-7"></div>
                <div className="bubbles bubble-4"></div>
                <div className="bubbles bubble-8"></div>
            </div>
        </div>
    );
}

export default LoginPage;