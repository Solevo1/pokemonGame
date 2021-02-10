import Layout from "../../../../components/Layout";
import s from './style.module.css';
import {useHistory} from 'react-router-dom'
import PokemonCard from "../../../../components/PokemonCard";
import {useState,useEffect,useContext} from 'react'; 
import bg from "../../../../assets/bg3.jpg"
import { FireBaseContext } from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const data= {
  abilities : [ "keen-eye", "tangled-feet", "big-pecks" ],
  base_experience : 122,
  height : 11,
  id : 19,
  img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  name : "pidgeotto",
  stats : {
    attack : 60,
    defense : 55,
    hp : 63,
    special : 50,
    speed : 71
  },
  type : "flying",
  values : {
    bottom : 7,
    left : 5,
    right : 2,
    top : "A"
  }}

const StartPage = () => {
  const firebase =useContext(FireBaseContext);
  const SelectedContext = useContext(PokemonContext)
  const [pokemons,setPokemons]=useState({});
  useEffect(()=>{
    firebase.getPokemonsSocket((pokemons)=>{
        setPokemons(pokemons);
    })
  },[]);
  const history=  useHistory(); 
  const handleClickButton=()=>{
       history.push('/')
    }
  const handleAddPokemon = ()=>{
    firebase.addPokemon(data,async ()=>{
     // await getPokemons();
    })
  }
  const handleChangeState=(id)=>{
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
              pokemon.active = !pokemon.active;
              pokemon.isSelected=!pokemon.isSelected
              SelectedContext.addPokemon(pokemon)
          };
  
          acc[item[0]] = pokemon;
          firebase.postPokemon(item[0],pokemon);
          return acc;
      }, {});
  });
  }
  
    return (
        <Layout
        id={1}
        title="Game page"
        urlBg={bg}
      >
        <div className={s.flex}>
        <button className={s.button} onClick={handleAddPokemon}>
            Add pokemon
        </button>
        </div>
        <div className={s.flex}>
              {
              Object.entries(pokemons).map(([key,{name,img,id,type,values,active,isSelected}])=> 
              <PokemonCard
                key={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                ChangeState={handleChangeState}
                isActive={active===true ? true : false}
                isSelected={isSelected===true ? true : false}
              />)
              }
        </div>
        <div className={s.flex}>
        <button className={s.button} onClick={handleClickButton}>
            Switch to home page
        </button>
        </div>
      </Layout>
    )
}

export default StartPage