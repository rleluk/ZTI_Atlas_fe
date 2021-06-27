import React from 'react';
import Menu from '../components/Menu';

import './HomePage.css';

const HomePage = (props) => {
    return (
        <div>
            <Menu/>
            <div class="fish">
            <div class="fish-body">
                <div class="eye">
                <div class="pupil"></div>
                </div>
            </div>
            <div class="fin"></div>
            <div class="fin fin-bottom"></div>
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

export default HomePage;