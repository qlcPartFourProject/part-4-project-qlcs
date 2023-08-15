import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allPokemon, setAllPokemon] = useState<any[]>();

  useEffect(() => {
    setTimeout(() => loadPokemonAsync(), 1100);
  }, []);

  const loadPokemonAsync = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setAllPokemon(res.data.results);
  }

  const renderAllPokemon = () => {
    return allPokemon?.map(p => {
      return (
        <div>
          {p.name}
        </div>
      );
    });
  }

  return (
    <div className='page'>
      <div className='pokemon-list'>
        {allPokemon ? renderAllPokemon() : 'Loading...'}
      </div>
    </div>
  )
}

export default App
