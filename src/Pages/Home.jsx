import mainBanner from '../assets/mainBanner1.json'
import logoAnimation from '../assets/logoAnimation.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <div id='homeOuter'>
                <Lottie animationData={mainBanner} />
                <div id='logoContainer'>
                    <h1 id='mainHeading'>CadenceWave<Lottie animationData={logoAnimation} /></h1>
                    <p id='mainText'>...Stream the Sounds of Life</p>
                    <div id='btnGroup'>
                        <button className='btnPrimary'><Link to={'/CadenceWave/Music/:Artists'}>Music</Link></button>
                        <button className='btnPrimary'><Link to={'/CadenceWave/Podcast/:Podcasters'}>Podcast</Link></button>
                        <button className='btnPrimary'><Link to={'/CadenceWave/Comedy'}>Comedy</Link></button>
                        <button className='btnPrimary'><Link to={'/CadenceWave/Spritual'}>Spritual</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Home;