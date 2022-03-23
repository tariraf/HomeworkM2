import '../App.css';
import React from 'react';

const Songdesc = ({ title, artist, albumImg }) => {
    return <div className = "song-desc" >
        <
        img src = { albumImg }
    /> <
    h3 > { title } < /h3>  <
        p > < span className = 'by' > by < /span>{artist}</p >
        <
        /div>;
};

export default Songdesc;