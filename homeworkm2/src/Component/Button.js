import React from "react";
import '../App.css';
import '../Style/cardstyle.css'


const Button = ({songUrl}) => {
    return (
    <div>
        <button className="mybtn">
            <a href={songUrl} className="songUrl" >Select</a>
        </button>
    </div>
    );
    
}

export default Button;