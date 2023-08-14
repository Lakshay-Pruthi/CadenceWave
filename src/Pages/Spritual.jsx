import manSpritual from '../assets/manSpritual.json'
import Lottie from 'lottie-react'

function Spritual() {

    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={manSpritual} />Spritual<Lottie animationData={manSpritual} /></h1>
            </div>
        </>
    )
}

export default Spritual;