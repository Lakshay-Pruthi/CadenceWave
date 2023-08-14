import user from '../assets/user.webp'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <Link to={'/home'}><h1>CadenceWave</h1></Link>
                <ul id='navList'>
                    <NavLink to={'Music'} >
                        <li>Music</li>
                    </NavLink>
                    <NavLink to={'Podcast'} >
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