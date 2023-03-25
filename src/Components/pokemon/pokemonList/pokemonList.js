import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {LOAD_POKEMONS} from "../../../Graphql/queries";
import PokemonInfo from "../pokemonInfo/pokemonInfo";
import "./List.scss";


function PokemonList({searchQuery}) {
    // Fetching all pokemons
    const {error , loading , data } = useQuery(LOAD_POKEMONS);
    
    // Display error message in case of any error
    if( error ) {
        return (
            <div class="alert alert-warning" role="alert">
            {error.message}
          </div>
        );
    }

    // Show spinner till data not fetched
    if (loading) {
        return (
        <div className="spinner-border jobs-ldng" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        );
    }
    
    // Filter the Pokemons based on the search query
    // Filtering is done on the basis of Pokemon Name 
    const filterPokemons = data["getAllPokemon"].filter((pokemon) =>
        pokemon.key.toLowerCase().includes(searchQuery.toLowerCase()));
    const renderPokemonData = data => {
        return filterPokemons.map((pokemon , index) => {
            return (
                <div className="column" key={index}>
                  <div className="card">
                    <div className="container cardList">
                      {/* Flag to tell from where the info component is called */}
                      {/* Passing the isFromList flag to render description accordingly*/}
                      <PokemonInfo pokemon={pokemon}/>
                      <Link
                        to={{
                          pathname: `/detail/${pokemon["key"]}`,
                          query: pokemon["key"],
                        }}
                      >
                        <button type="button" className="btn btn-primary">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
        });
    };
    return <div>{data ? renderPokemonData(data) : null}</div>;
};
export default PokemonList;