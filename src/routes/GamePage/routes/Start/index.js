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
    });
    return ()=>firebase.offPokemonsSocket();
  },[]);
  const history=  useHistory(); 
  const handleClickButton=()=>{
       history.push('/')
    }
  
  const handleChangeState=(key)=>{
    const pokemon ={...pokemons[key]};
    SelectedContext.addPokemon(key,pokemon);
    setPokemons(prevState=>(
      {
        ...prevState,
        [key]:{
          ...prevState[key],
          selected:! prevState[key].selected,
        }
      }
    ))
  }
  const handleStartGame=()=>{
history.push('/game/board')
  }
    return (
        <Layout
        id={1}
        title="Game page"
        urlBg={bg}
      >
        <div className={s.flex}>
        <button className={s.button} onClick={handleStartGame} disabled={Object.keys(SelectedContext.pokemons).length<5}>
            StartGame
        </button>
        </div>
        <div className={s.flex}>
              {
              Object.entries(pokemons).map(([key,{name,img,id,type,values,active,selected}])=> 
              <PokemonCard
              className={s.card}
                key={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                ChangeState={()=>{
                  if(Object.keys(SelectedContext.pokemons).length<5 || selected)
                  handleChangeState(key)}}
                isActive={true}
                isSelected={selected===true ? true : false}
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