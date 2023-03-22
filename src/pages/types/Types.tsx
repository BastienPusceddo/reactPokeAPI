import React, {useEffect, useState} from 'react';

const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};
type types = {
    results : [
        {
            name: string,
            url: string
        }

    ]
}
type pokeType = {
    name : string;
    pokemon : Array<unknown>;

}

const fetchData = (url: RequestInfo | URL) => fetch(url).then(res => res.json());
const apiUrl : string = "https://pokeapi.co/api/v2";

const getPokemonCountByTypes :() => Promise<{ nombrePokemon: number; type: string }[]> = () => {
    // on récupère avec un tableau de tous les types
    return fetchData(`${apiUrl}/type`)
        //on récupère un tableau avec le nom des types et un array avec tous les pokemons qui on ces Types
        .then((types : types) => Promise.all(types.results.map(type => fetchData(type.url))))
        //on crée un tableau avec le nom de types et le nombre de pokemon qui l'ont
        .then((types : Array<pokeType> )=> types.map(type => ({
            type: type.name,
            nombrePokemon: type.pokemon.length
        })));
};

const getColorByType = (type : string) => {
    // @ts-ignore
    return colours[type];
}

function Types(){

    const [pokemonTypes, setPokemonTypes] = useState<{ nombrePokemon: number; type: string }[]>([]);

    useEffect(() => {
        getPokemonCountByTypes().then((r) =>{
            setPokemonTypes(r)
        } );
    }, []);

    return(
        <>

            <div className={'typesList'}>
                {
                    pokemonTypes
                        .map((type: any) =>
                            <div className={'typeItem'} style={{backgroundColor: getColorByType(type.type)}}>
                                {type.type} : {type.nombrePokemon}
                            </div>)
                }
            </div>
        </>

    );
}

export default Types;