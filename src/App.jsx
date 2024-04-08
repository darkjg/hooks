import './App.css';
import { usePersonaje } from "./hooks/useFecthCharacters"

async function App() {

  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  const urlRick = 'https://rickandmortyapi.com/api/character/?name=';
  const personaje = usePersonaje("mew", urlPokemon);


  if (!personaje) {
    return <div>Cargando...</div>;
  }


  return (
    <>

      <h1>Pokemon Data</h1>
      <h2>{personaje.name}</h2>
      <img src={personaje.sprites.front_default} alt={personaje.name} />

    </>
  );
}

export default App;


/*

{pokemon == null ? (

        < h2 > Cargando</h2 >

      ) : (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}  

<h2>Rick and Morty Data</h2>
      {rick == null ? (
        < h2 > Cargando</h2 >

      ) : (

        <div>
          <h2>{rick.name}</h2>
          <img src={rick.image} alt={rick.name} />
        </div>
      )}*/
