import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const MainLayout : React.FC = () => {
    
return (
    //Move to a navbar component

<>
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/misdemeanours'>Misdemeanors </NavLink></li>
            <li><NavLink to='/confess'>Confess</NavLink></li>
        </ul>
    </nav>

    <Outlet/>
</>

    )

}

export default MainLayout