import { Outlet, useLocation, NavLink } from 'react-router-dom'
import { MinistryLogo } from './logo'


const MainLayout : React.FC = () => {

const location = useLocation();
    
return (
    //Move to a navbar component
    
<>
    <nav className='nav__container home__colour'>        
        
        <ul className='ul__navbar'>
            <li><MinistryLogo/></li>
            <li className=''><NavLink to='/' className='nav__link'>Home</NavLink></li>
            <li className=''><NavLink to='/misdemeanours'>Misdemeanors </NavLink></li>
            <li className=''><NavLink to='/confess'>Confess</NavLink></li>
        </ul>
    </nav>

    <Outlet/>
</>

    )

}

export default MainLayout