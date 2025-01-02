// import memesData from '../data/memesData';
import {useState} from 'react';
import {useEffect} from 'react';
export default function Meme(){
    const[meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walks into Mordor',
        imageUrl: "http://i.imgflip.com/1bij.jpg"   
    });
    const [allMemes, setAllMemes] = useState([]);

    // function getMemeImage(){
    //     //const arrayMemes = memesData.data.memes;
    //     const memeIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
    //     setMeme( prevMemeImg => {
    //         return{
    //             ...prevMemeImg,
    //              randomImage: allMemeImages.data.memes[memeIndex].url
    //             }
    //         }
    //     );
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(memes => setAllMemes(memes.data.memes));
    },[]);
        // const meme = memesData[memeIndex];
        // console.log(meme);
        // const randomMeme = (memesData.data.memes[memeIndex].url);
        // console.log(randomMeme);
    
        return(
        <main>
            <div className="form">
                <label>Top text
                    <input type="text" placeholder="Top text" value={meme.topText} onChange={(e) => setMeme(prevMeme => ({...prevMeme, topText: e.target.value}))} />
                </label>
                <label>Bottom text
                    <input type="text" className="form--input" value={meme.bottomText}placeholder="Bottom text" onChange={(e) =>
                     setMeme(prevMeme =>
                         ({...prevMeme, 
                        bottomText: e.target.value
                    }))}/>
                </label>
                <button onClick={ () =>
                    {
                        const memeIndex = Math.floor(Math.random() * allMemes.length);
                        setMeme(prevMeme => {
                            return{
                                ...prevMeme,
                                imageUrl: allMemes[memeIndex].url
                            }
                        });
                    }
                }>Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="meme" className='meme--image'></img>
                <span className='top'>{meme.topText}</span>
                <span className='bottom'>{meme.bottomText}</span>
            </div>
        </main>
    )
}