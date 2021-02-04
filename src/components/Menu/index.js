import s from './style.module.css';
import cn from 'classnames';
import {Link} from 'react-router-dom';

const MENU = [
  {
    title:'HOME',
    to: '/',
  },
  {
    title:'GAME',
    to: '/game',
  },
  {
    title:'ABOUT',
    to: '/about',
  },
  {
    title:'CONTACT',
    to: '/contact',
  },
]  

const Menu = ({isActive,onSetMenu}) => {
  return  (
        <div className={cn(s.menuContainer,{
          [s.active]: isActive===true,
          [s.deactive]: isActive===false
        })}>
          <div className={s.overlay} />
          <div >
            <ul>
              {
                MENU.map(({title,to},index)=>(
                  <li key= {index}>
                        <Link to ={to} onClick={onSetMenu}>
                          {title}
                        </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    )
}

export default Menu;