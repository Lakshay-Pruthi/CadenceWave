import navArrowLeft from '../assets/navArrowLeft.png'
import navArrowRight from '../assets/navArrowRight.png'

function Footer() {
    return (
        <>
            <div style={{ backgroundColor: 'var(--primary)', color: 'white', borderBottom: '2px solid white', paddingLeft: '5px' }}>Note : This app is supported by Spotify api and it is under going some changes so some functionalities might not be available or you may be redirected for those functionalities.</div>

            <footer>
                <button className="windowNavBtn" onClick={() => { window.history.back() }}> <img src={navArrowLeft} alt="" /> </button>
                <p>©Lakshay Pruthi</p>
                <button className="windowNavBtn" onClick={() => { window.history.forward() }}> <img src={navArrowRight} alt="" /></button>
            </footer>


        </>
    )
}

export default Footer;