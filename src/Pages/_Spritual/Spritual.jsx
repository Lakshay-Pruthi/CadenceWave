import manSpritual from '../../assets/manSpritual.json'
import Lottie from 'lottie-react'
import searchIcon from '../../assets/search.png'
import { NavLink, Link } from 'react-router-dom'

function Spritual() {

    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={manSpritual} />Spritual<Lottie animationData={manSpritual} /></h1>
                <nav className='innerNav'>
                    <div>
                        <NavLink to={'/Spritual/:Artists'} className={'inactive'}>Artists</NavLink>
                        <NavLink to={'/Spritual/:Albums'} className={'inactive'}>Albums</NavLink>
                        <NavLink to={'/Spritual/:Playlists'} className={'inactive'}>Playlists</NavLink>
                        <NavLink to={'/Spritual/:Songs'} className={'inactive'}>Songs</NavLink>
                    </div>

                </nav>
                <h1>Coming Soon...</h1>
                <div className='note'>
                    <p>To check functionality of the app. Please go to</p>
                    <Link to={'/CadenceWave/Music/:Artists'}>Music</Link>
                    <Link to={'/CadenceWave/Podcast/:Podcasters'}>Podcast</Link>
                </div>
            </div>
        </>
    )
}

export default Spritual;