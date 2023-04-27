import imagenRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './component/Characters';

function App() {

  const [characters, setCharacters] = useState(null); 

  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterapi = await api.json();

    setCharacters(characterapi.results);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>) : (
          <>
          <img src={imagenRickMorty} alt='Rick & Morty' className='img-home'></img>
          <button onClick={reqApi} className='btn-search'>Buscra personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
