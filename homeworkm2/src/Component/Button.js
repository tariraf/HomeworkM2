import React, { useState } from "react";
import '../App.css';
import '../Style/cardstyle.css'


const Button = ({songUrl}) => {
    const [select, setSelect] =  useState(false);

    const handleSelect = () => {
        setSelect(!select);
        
    }

    

    return (
    <div>
        <button className="mybtn">
            <a href={songUrl} className="songUrl" onClick={handleSelect}>{select ? 'Deselect' : 'Select'}</a>
        </button>
    </div>
    );
    
}

export default Button;