import Lottie from 'lottie-react'
import charComedy from '../../assets/charComedy.json'
import searchIcon from '../../assets/search.png'
import { Link, NavLink } from 'react-router-dom'

function Comedy() {

    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={charComedy} />Comedy<Lottie animationData={charComedy} /></h1>
                <nav className='innerNav'>
                    <div>
                        <NavLink to={'/Comedy/:Artists'} className={'inactive'}>Artists</NavLink>
                        <NavLink to={'/Comedy/:Albums'} className={'inactive'}>Albums</NavLink>
                        <NavLink to={'/Comedy/:Playlists'} className={'inactive'}>Playlists</NavLink>
                        <NavLink to={'/Comedy/:Songs'} className={'inactive'}>Songs</NavLink>
                    </div>

                </nav>
                <h1>
                    Coming Soon...
                </h1>
                <div className='note'>
                    <p>To check functionality of the app. Please go to</p>
                    <Link to={'/Music/:Artists'}>Music</Link>
                    <Link to={'/Podcast/:Podcasters'}>Podcast</Link>
                </div>

            </div>
        </>
    )
}

export default Comedy;