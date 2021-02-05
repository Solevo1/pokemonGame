import s from './style.module.css';
import cn from 'classnames';


const Navbar = ({onSetMenu,bgActive=false,isActive}) => {
    return  (
        <nav id={s.navbar} className={cn({
          [s.bgActive]:bgActive
        })}>
  <div className={s.navWrapper}>
    <p className={s.brand}>
      LOGO
    </p>
    <div className={cn(s.menuButton,{[s.active]:isActive})} onClick={onSetMenu}>
      <span />
    </div>
  </div>
</nav>
    )
}

export default Navbar;