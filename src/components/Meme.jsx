import memesData from '../data/memesData';
import {useState} from 'react';

export default function Meme(){
    const[meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"   
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage(){
        //const arrayMemes = memesData.data.memes;
        const memeIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
        setMeme( prevMemeImg => {
            return{
                ...prevMemeImg,
                 randomImage: allMemeImages.data.memes[memeIndex].url
                }
            }
        );
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
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} alt="meme" className='meme--image'></img>
        </main>
    )
}