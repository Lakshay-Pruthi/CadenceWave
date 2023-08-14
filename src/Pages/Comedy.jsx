import Lottie from 'lottie-react'
import charComedy from '../assets/charComedy.json'

function Comedy() {

    return (
        <>
            <div className="sub-Container">
                <h1 className="subHeading"><Lottie animationData={charComedy} />Comedy<Lottie animationData={charComedy} /></h1>
            </div>
        </>
    )
}

export default Comedy;