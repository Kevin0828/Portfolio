import React from 'react';
import '../DownArrow/DownArrow.css';
import DownArrowLogo from '../../Images/DownArrow.jpg';

const DownArrow = () => {
    return (
        <div className="down-arrow down-bounce fade-in-slow">
            <img className="down-arrow-img" src = {DownArrowLogo} />
        </div>
    );
}

export default DownArrow;