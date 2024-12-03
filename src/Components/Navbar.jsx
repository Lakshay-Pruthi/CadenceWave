import user from '../assets/user.webp'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <Link to={'/CadenceWave/'}><h1>CadenceWave</h1></Link>
                <ul id='navList'>
                    <NavLink to={'Music/:Artists'} className={({ isActive }) =>
                        isActive || location.pathname.includes("/Music") ? "active" : ""
                    }
                    >
                        <li>Music</li>
                    </NavLink>
                    <NavLink to={'Podcast/:Podcasters'} className={({ isActive }) =>
                        isActive || location.pathname.includes("/Podcast") ? "active" : ""
                    } >
                        <li>Podcast</li>
                    </NavLink>
                    <NavLink to={'Comedy'} >
                        <li>Comedy</li>
                    </NavLink>
                    <NavLink to={'Spritual'} >
                        <li>Spritual</li>
                    </NavLink>
                </ul>
                {/* <div>
                    <p>v &nbsp;Samantha</p>
                    <img src={user} alt="" />
                </div> */}
            </nav >
        </>
    )
}

export default Navbar;