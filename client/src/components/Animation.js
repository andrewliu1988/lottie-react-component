import React from "react";
import Lottie from 'react-lottie'

const Animation = (props) => {

    const defaultOptions = {
        animationData: props.animation.animation,
        loop: false,
        autoplay: false,
    }

    const [direction, setDirection] = React.useState(-1)

    const handleClick = () => {
        setDirection(direction * -1)
    }

    return (
        <div onClick={handleClick}>
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                isStopped={false}
                isPaused={false}
                speed={2}
                direction={direction}
            />
        </div>
    )
}
export default Animation
