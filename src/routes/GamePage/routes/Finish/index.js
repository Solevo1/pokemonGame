import {useContext, useEffect, useState} from 'react'
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';
import {PokemonContext} from "../../../../context/pokemonContext";
import s from './style.module.css';
import {useHistory} from 'react-router-dom'
import bg from "../../../../assets/bg3.jpg"
import { FireBaseContext } from "../../../../context/firebaseContext";

const FinishPage = () => {
    const {pokemons,enemies,clearEnemies,addEnemies} = useContext(PokemonContext);
    const [enemypokemons,setEnemyPokemons]=useState(enemies);
    useEffect(()=>{
        setEnemyPokemons(enemies);
        clearEnemies();
      },[]);
    const history =useHistory();
    const firebase =useContext(FireBaseContext);
    if(enemies.length===0){
        history.replace('/game');
    }
    const handleClickButton=()=>{
        handleAddPokemon(enemies);
        history.push('/game')
     }
     const handleAddPokemon = (data)=>{
        firebase.addPokemon(data);
      }
    const handleChangeState=(key)=>{
        enemypokemons.forEach(el=>{
            if(el.id===key){
                addEnemies(el);
            }
        })
        setEnemyPokemons(prevState=>
            {
                let newArray = prevState.slice();
                newArray.forEach((element,index,array) => {
                   if(element.id===key)
                   {
                       array[index].selected=!array[index].selected
                   } 
                });
                return newArray;
          }
        )
      }
    return (
        <>
        <Layout
        id={1}
        title="Your pokemons"
        urlBg={bg}
      >
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
                isActive={true}
              />)
              }
        </div>
      </Layout>
      <div className={s.container}>
        <button className={s.button} onClick={handleClickButton}>
            End game
        </button>
        </div>
      <Layout
        id={2}
        title="Enemy pokemons"
        urlBg={bg}
      >
        <div className={s.flex}>
              {
                  enemypokemons.map((item)=>(
                     
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            isActive={true}
                            isSelected={item.selected}
                            ChangeState={()=>{
                                if(enemies.length<1 || item.selected)
                                handleChangeState(item.id)}} 
                        />
                ))
              }
        </div>
      </Layout>
      </>
    );
};

export default FinishPage;
