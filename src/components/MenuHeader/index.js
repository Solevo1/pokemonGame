import Navbar from '../Navbar';
import {useState} from 'react'; 
import Menu from '../Menu';

const MenuHeader =  () => {
    const [isActive,setActive] = useState(false);
    const handleSetMenu =()=>{
    setActive(!isActive);
    }
          return ( 
            <>
                <Navbar  onSetMenu={handleSetMenu}/>
                <Menu isActive={isActive}/>
            </>
          )
       
}

export default MenuHeader;