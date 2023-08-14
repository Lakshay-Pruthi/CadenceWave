import navArrowLeft from '../assets/navArrowLeft.png'
import navArrowRight from '../assets/navArrowRight.png'

function Footer() {
    return (
        <>
            <footer>
                <button className="windowNavBtn" onClick={() => { window.history.back() }}> <img src={navArrowLeft} alt="" /> </button>
                <p>©Lakshay Pruthi</p>
                <button className="windowNavBtn" onClick={() => { window.history.forward() }}> <img src={navArrowRight} alt="" /></button>

            </footer>


        </>
    )
}

export default Footer;