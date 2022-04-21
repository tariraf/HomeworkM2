const Home = () =>{
    const handleLogin = () => {
    let client_id = 'de541150ee134e6b9563b5241a3261f1';
    let redirect_uri = 'http://localhost:3000/';
    let scope = 'playlist-modify-private';
    let url = 'https://accounts.spotify.com/authorize?' +
        'client_id=' + encodeURIComponent(client_id) +
        '&redirect_uri=' + encodeURIComponent(redirect_uri) +
        '&scope=' + encodeURIComponent(scope) +
        '&response_type=token&show_dialog=true';

    window.location = url;
    let hash = window.location.hash;
    let access_token = hash.substring(hash.indexOf('=') + 1, hash.indexOf('&'));
    localStorage.setItem("token", access_token);
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Home;


