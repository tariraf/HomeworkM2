import './App.css';
import { albumImg, title, artist } from './Songsdata/Data';
import Cards from './Component/Cards';
import data from './Songsdata/Datas';
import React from 'react';
import Searchbar from './Component/Searchbar';
import Home from './Pages/Home';
function App() {
    return ( 
        (
        
        <div className='container'>
          {/* <Searchbar />
          <div className='Cards'>
            
            { 
              data.map((e) => (
              <React.Fragment key = {e.id}>
               
                <Cards 
                albumImg={e.album.images[0].url}
                title = { e.album.name }
                url = { e.external_urls.spotify}
                artist = { e.album.artists[0].name }
                />
                
              </React.Fragment>
              ))}

            
          </div> */}
          <Home />
          <Searchbar />
        </div>)
    );
}

export default App;