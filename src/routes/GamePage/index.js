import {useState,useEffect,useContext} from 'react';
import {useRouteMatch,Route,Switch} from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";


const GamePage = () => {
  const [pokemons,setPokemons]=useState([]);
  const handleAddPokemon= (val)=>{
    setPokemons(prevstate=>{
      prevstate.push(val);
      return [...prevstate]
    })
  }
  console.log(pokemons)
  const match = useRouteMatch();
  return (
      <PokemonContext.Provider value={{pokemons:pokemons,addPokemon:handleAddPokemon}}>
      <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
      </PokemonContext.Provider>
  );
}

export default GamePage