import React , {Fragment} from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import { ApolloProvider , InMemoryCache , ApolloClient } from "@apollo/client";
import MainPage from "./Components/MainPage/MainPage";
import PokemonDetail from "./Components/pokemon/pokemonDetail/pokemonDetail";

// Apollo client with the pokemon API url
const client = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/v7',
  cache: new InMemoryCache(),
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<MainPage />} />
            <Route path="/detail/:id" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
