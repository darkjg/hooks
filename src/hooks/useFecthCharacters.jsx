
import { useState, useEffect } from 'react';

export  const usePersonaje = (url="https://pokeapi.co/api/v2/pokemon/",nombre="mew") => {
    
    const [personaje, setPersonaje] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {         
                   
                const response = await fetch(url+nombre);               
                const data = await response.json();
              
                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    },[url]);
    return personaje;
};






