import React from 'react';


const fetchData = (url: RequestInfo | URL) => fetch(url).then(res => res.json());
const apiUrl : string = "https://pokeapi.co/api/v2";

const showPokemonTotalBaseStats = (pokemon : string) => {
    //on récupère le pokemon sur l'API
    return fetchData(`${apiUrl}/pokemon/${pokemon}`)
        //on ajoutes toutes les stats du pokémon
        .then(pokemon => pokemon.stats.reduce((before: any, current: { base_stat: any; }) => before + current.base_stat, 0))
        //on affiche les stats
        .then(stats => console.log(`Stats totales de ${pokemon} : ${stats}`))
        //si le pokemon n'éxiste pas on affiche un message d'erreur
        .catch(() => console.error(`${pokemon} n'existe pas :(`));
};

function Home() {
    return (
        <>
            <div className={'homeContainer'}>
                <div>
                    <h3>Efficacité d'une attaque sur un pokémon :</h3>
                    <form action={""}>
                        <div>
                            <label>Attaque :</label>
                            <input name={'attaque'} type={"text"}/>
                        </div>

                        <div>
                            <label>Pokemon :</label>
                            <input name={'pokemon'} type={"text"}/>
                        </div>

                        <button type="submit"> Calculer !</button>
                    </form>

                </div>
                <div>
                    <h3>Calculer les stats de base d'un pokémon :</h3>
                    <form>
                        <div>
                            <label>Pokemon :</label>
                            <input name={'pokemon'} type={"text"}/>
                        </div>

                        <button type="submit"> Calculer !</button>
                    </form>

                </div>

            </div>
        </>

    );
}

export default Home;