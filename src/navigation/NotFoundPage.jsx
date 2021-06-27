import React from 'react';
import './HomePage.css';


const NotFoundPage = (props) => {
    return (
        <div style={{fontWeight: 'bold', textAlign: 'center'}}>
            <div style={{fontSize: 60, margin: 100}}>
                404
            </div>
            <div style={{fontSize: 35, padding: 50}}>
                Nie znaleziono strony!
            </div>
            <div class="bubbles bubble-1"></div>
            <div class="bubbles bubble-5"></div>
            <div class="bubbles bubble-2"></div>
            <div class="bubbles bubble-6"></div>
            <div class="bubbles bubble-3"></div>
            <div class="bubbles bubble-7"></div>
            <div class="bubbles bubble-4"></div>
            <div class="bubbles bubble-8"></div>
        </div>
    );
}

export default NotFoundPage;