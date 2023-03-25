import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './mainPage.scss';
function MainPage() {
    return (
        <div>
            <h2 className="main">Poekmon API</h2>
            <SearchBar />
        </div>
    );
}

export default MainPage;