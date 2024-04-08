import './App.css';
import { usePersonaje } from "./hooks/useFecthCharacters.jsx"

function App() {

  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  const urlRick = 'https://rickandmortyapi.com/api/character/?name=';
  const nombrePokemon = "mew"
  const nombreRick = "Rick Sanchez"
  const personaje = usePersonaje(urlPokemon, nombrePokemon);
  const personajeRick = usePersonaje(urlRick, nombreRick);


  if (!personaje && !personajeRick) {
    return <div>Cargando...</div>;
  } else {
    return (
      
      <>
    
        <div>
          <h1>Pokemon Data</h1>
          <h2>{personaje.name}</h2>
          <img src={personaje.sprites.front_default} alt={personaje.name} />
        </div>
        <div>
        <h1>Rcik Data</h1>
          <h2>{personajeRick.results[0].name}</h2>
          <img src={personajeRick.results[0].image} alt={personajeRick.results[0].name} />
        </div>

      </>
    );
  }





}

export default App;


