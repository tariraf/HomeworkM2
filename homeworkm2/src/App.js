import logo from './logo.svg';
import './App.css';
import Songdesc from './Component/Songdesc';
import Button from './Component/Button';
import { albumImg, title, artist } from './Component/Data';

function App() {
    return ( < div className = "App" >
        <div className = 'song-detail' >
        

        <Songdesc 
        albumImg={albumImg}
        title = { title }
        artist = { artist }
        />

        <Button/>

        </div>  
        </div>
    );
}

export default App;