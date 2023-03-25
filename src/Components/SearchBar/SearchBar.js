import React, {Fragment, useState} from "react";
import PokemonList from "../pokemon/pokemonList/pokemonList";
import "./SearchBar.scss";


function SearchBar () {
    // Intilize the state for the form data to be used for query
    const [formData, setFormData] = useState({searchQuery:""});
    const { searchQuery } = formData;
    const onChange = (e) => {
        let value = e.target.value;
        setFormData({...formData, [e.target.name]:value});
    };
    return (
       <Fragment>
            <div className="form-outline searchbar">
                <input
                    type="search"
                    id = "form1"
                    className="form-control"
                    placeholder="Type Query"
                    aria-label="Search"
                    name="searchQuery"
                    value={searchQuery}
                    onChange= {(e) => onChange(e)}
                />
            </div>
            <PokemonList searchQuery={formData.searchQuery} isDetail={false}/>
       </Fragment>
    ); 
};

export default SearchBar;