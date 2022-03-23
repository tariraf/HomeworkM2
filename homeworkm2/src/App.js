import logo from './logo.svg';
import './App.css';
import Songdesc from './Component/Songdesc';
import Button from './Component/Button';
import { albumImg } from './Component/Data';

function App() {
    return ( <
        div className = "App" >
        <
        div className = 'song-detail' >
        <
        img src = { albumImg }
        />

        <
        Songdesc / >

        <
        Button / >

        <
        /div> <
        /div>
    );
}

export default App;