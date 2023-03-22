import './App.css';
import { useEffect, useState } from 'react';
import data from "./data.json";
import particles from "./particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function App() {
  const [randomText, setRandomText] = useState("");
  const [wordCount, setWordCount] = useState(20);

  const handleInit = async (main) => {
    await loadFull(main);
  };



  const getRandomText = (wordCount) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const text = data[randomIndex].body;
    const words = text.split(' ');
    const truncatedWords = words.slice(0, wordCount);
    return truncatedWords.join(' ');
  };

  const generateRandomText = () => {
    setRandomText(getRandomText(wordCount));
  };

  const handleWordCountChange = (event) => {
    setWordCount(event.target.value);
  };



  return (
    <div className='container'>
      <Particles id="particles" style={{position:"absolute",width:"100%"}} options={particles} init={handleInit} />
      <div className='mainbox'>
        <span className='logogif'></span>
        <h1>Text Genie</h1>
        <h5 style={{color:"#2398F4"}}>the random text generator</h5>
        {
          !randomText &&
          <div className='welcome'><h4>Welcome</h4> to <h5>text genie</h5> click button below to get started</div>
        }
        <p>{randomText}</p>
        <div className='options'>
          <button onClick={generateRandomText}>Generate text</button>
          <div className='wordlimit' >
          <label htmlFor='wordCount'>Word count:</label>
          <input type='number' id='wordCount' name='wordCount' min='1' max='100' value={wordCount} onChange={handleWordCountChange} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
