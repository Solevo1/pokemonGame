import Layout from "../../components/Layout";
import s from './style.module.css';
import {useHistory} from 'react-router-dom'
import PokemonCard from "../../components/PokemonCard";
import {useState,useEffect} from 'react'; 
import bg from "../../assets/bg3.jpg"
import database from "../../service/firebase"

const data= {
  abilities : [ "keen-eye", "tangled-feet", "big-pecks" ],
  base_experience : 122,
  height : 11,
  id : 17,
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

const GamePage = () => {
  const [pokemons,setPokemons]=useState({});
  useEffect(()=>{
    database.ref('pokemons').once('value',(snapshot)=>{
    setPokemons(snapshot.val());
    })
  },[]);
  const history=  useHistory(); 
  const handleClickButton=()=>{
       history.push('/')
    }
  const handleAddPokemon = ()=>{
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data);
    database.ref('pokemons').once('value',(snapshot)=>{
      setPokemons(snapshot.val());
      })
  }
  const handleChangeState=(id)=>{
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
              pokemon.active = !pokemon.active;
              console.log(pokemon);
              database.ref(`pokemons/${item[0]}`).set({
                ...pokemon
              });
          };
  
          acc[item[0]] = pokemon;
  
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
              Object.entries(pokemons).map(([key,{name,img,id,type,values,active}])=> 
              <PokemonCard
                key={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                ChangeState={handleChangeState}
                isActive={active===true ? true : false}
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

export default GamePage