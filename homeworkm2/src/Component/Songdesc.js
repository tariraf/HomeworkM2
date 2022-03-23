import '../App.css';
import React from 'react';
import { title, artist } from './Data';
const Songdesc = () => {
    return <div className = "song-desc" >
        <
        h3 > { title } < /h3> <
        p > < span className = 'by' > by < /span>{artist}</p >
        <
        /div>;
};

export default Songdesc;