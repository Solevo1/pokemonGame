import s from './style.module.css';
import cn from 'classnames';
import {useState} from 'react'; 
const Navbar = ({onSetMenu}) => {
    const [isActive,setActive] = useState(false);
    const handleClick =  ()=>{
        setActive(!isActive);
        onSetMenu();
    }
    return  (
        <nav id={s.navbar}>
  <div className={s.navWrapper}>
    <p className={s.brand}>
      LOGO
    </p>
    <a className={cn(s.menuButton,isActive ? s.active : null)} onClick={handleClick}>
      <span />
    </a>
  </div>
</nav>
    )
}

export default Navbar;