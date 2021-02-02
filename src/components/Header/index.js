import s from './style.module.css';

const Header = ({title,descr,onClickButton,page}) => {
    const handleClick =  ()=>{
        console.log("Header!");
        onClickButton && onClickButton('game');
    }
    return  (
    <header className={s.root}>
        <div className={s.forest}></div>
        <div className={s.container}>
            { title ? (<h1>{title}</h1>) : null}
            <p>{descr}</p>
            <button onClick= {handleClick} className={s.button}>
                Start Game
            </button>
        </div>
    </header>
    )
}

export default Header;