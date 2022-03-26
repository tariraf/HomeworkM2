import '../App.css'
import '../Style/cardstyle.css'
import Songdesc from './Songdesc'
const Cards = ({albumImg, title, artist, url}) => {
    return (
    <div className='card'>
        <div className = 'song-detail'>
        <Songdesc 
            albumImg={albumImg}
            title = { title }
            artist = { artist }
            songUrl={url}
        />
        </div>
    </div>
    );
}

export default Cards;