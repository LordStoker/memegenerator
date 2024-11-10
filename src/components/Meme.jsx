import memesData from '../data/memesData';
import {useState} from 'react';

export default function Meme(){
    const[memeURL, setMemeURL] = useState('');
    function newMeme(){
        //const arrayMemes = memesData.data.memes;
        const memeIndex = Math.floor(Math.random() * memesData.data.memes.length);
        setMemeURL(memesData.data.memes[memeIndex].url);
        // const meme = memesData[memeIndex];
        // console.log(meme);
        // const randomMeme = (memesData.data.memes[memeIndex].url);
        // console.log(randomMeme);
    }



    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button className="form--button" onClick={newMeme}>Get a new meme image 🖼️</button>
            </div>
            <img src={memeURL}></img>
        </main>
    )
}