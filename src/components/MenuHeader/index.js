import Navbar from '../Navbar';
import {useState} from 'react'; 
import Menu from '../Menu';

const MenuHeader =  (bgActive) => {
    const [isActive,setActive] = useState(null);
    const handleSetMenu =()=>{
    setActive(prevstate=>!prevstate);
    }
          return ( 
            <>
              <Menu isActive={isActive} onSetMenu={handleSetMenu}/>
              <Navbar  
                  onSetMenu={handleSetMenu}
                  isActive={isActive}
                  bgActive={bgActive}
              />
            </>
          )
       
}

export default MenuHeader;