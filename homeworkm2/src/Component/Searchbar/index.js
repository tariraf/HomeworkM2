import { Component } from 'react';
import './index.css';

export default class Searchbar extends Component {
    state = {
        text : '',
    };

    handleInput(e){
        const inputValue = e.target.value;
        this.setState({text : inputValue});
    }

    getData(){
        await fetch('https://api.spotify.com/v1/search?type=track&q=${text}')
        .then((data) => data.json());
    }

    render () {
        return (
            <div className='searchbar'>
            <form>
                <input type="text" 
                placeholder='Search'
                onChange={(e)=>{this.handleInput(e)}}
                />
                <button className='search__btn' type='submit'onClick={()=>{this.getData()}}>Search</button>
            </form>
        </div>
        );
    }
}