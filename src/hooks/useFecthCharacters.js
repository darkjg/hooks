
import { useState, useEffect } from 'react';

export  const usePersonaje = (nombre = "mew",url="https://pokeapi.co/api/v2/pokemon/") => {
    const [personaje, setPersonaje] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {                
                const response = await fetch(url + nombre);               
                const data = await response.json();
                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    },[nombre, url]);
    return personaje;
};






