import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMONS } from "../../../Graphql/queries";
import { useNavigate } from "react-router-dom";
import PokemonInfo from "../pokemonInfo/pokemonInfo";
import "./detail.scss";

function PokemonDetail () {
    const navigate = useNavigate();
    const id = window.location.pathname.split("/")[2];
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
    const filterPokemon = data["getAllPokemon"].filter((pokemon) =>
    pokemon.key.toLowerCase() === id );

    const renderPokemonData = data => {
        return filterPokemon.map((pokemon , index) => {
            return (
                <div className="column" key={index}>
                  <div className="card">
                    <div className="container cardList">
                      {/* Flag to tell from where the info component is called */}
                      {/* Passing the isFromList flag to render description accordingly*/}
                      <PokemonInfo pokemon={pokemon} isDetail={true}/>
                      <button
                            type="button"
                            className="btn btn-primary btn-detail-back"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </div>
                  </div>
                </div>
              );
        });
    };
    return <div>{data ? renderPokemonData(data) : null}</div>;
}
export default PokemonDetail;