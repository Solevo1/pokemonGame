import firebase from  "firebase/app";
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyBgnP2liNn9hICwIeKrvEhRBql6Wu5kbNM",
  authDomain: "pokemon-game-60038.firebaseapp.com",
  databaseURL: "https://pokemon-game-60038-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-60038",
  storageBucket: "pokemon-game-60038.appspot.com",
  messagingSenderId: "461245803639",
  appId: "1:461245803639:web:0582c67a6d004fb3c06a72"
};
firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire=firebase;
    this.database=this.fire.database();
  }
  getPokemonsOnce= async () =>{
    return await this.database.ref('pokemons').once('value').then(snapshot=>snapshot.val());
  }
  postPokemon = (key,pokemon)=>{
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }
  addPokemon = (data,cb)=>{
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(()=>cb());
  }
  offPokemonsSocket=()=>{
    this.database.ref('pokemons').off()
  }
  getPokemonsSocket=(cb)=>{
    this.database.ref('pokemons').on('value',(snapshot)=>{
      cb(snapshot.val());
    })
  }
}

export default  Firebase;