import Layout from "../../components/Layout";
import s from './style.module.css';
const GamePage = ({onChangePage}) => {
    const handleClickButton=(page)=>{
        console.log("Game page")
      onChangePage && onChangePage('home');
    }
    return (
        <Layout
        id={1}
        title="Game page"
        colorBg="green"
      >
        <button className={s.button} onClick={handleClickButton}>
            Switch to home page
        </button>
      </Layout>
    )
}

export default GamePage