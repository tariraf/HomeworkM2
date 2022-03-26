import '../App.css';
import React from 'react';
import Button from './Button';
const Songdesc = ({ title, artist, albumImg, songUrl }) => {
    return (
    <div className = "song-desc" >
      <img src = { albumImg }/>
      <h3> { title } </h3> 
      <p> <span className = 'by'> by </span>{artist}</p>
      <Button songUrl={songUrl}/>
    </div>
    );
};

export default Songdesc;