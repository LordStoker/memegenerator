import memesData from '../data/memesData';

export default function Meme(){

    function handleClick(){
        //const arrayMemes = memesData.data.memes;
        const memeIndex = Math.floor(Math.random() * memesData.data.memes.length);
        // const meme = memesData[memeIndex];
        // console.log(meme);
        const randomMeme = (memesData.data.memes[memeIndex].url);
        console.log(randomMeme);
    }



    return(
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button className="form--button" onClick={handleClick}>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}