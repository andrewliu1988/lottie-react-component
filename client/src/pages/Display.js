import React from "react";
import '../style/Template.css'

import DropDown from '../components/Dropdown'
import Animation from '../components/Animation'

import check from '../assets/animations/check.json'
import menu from '../assets/animations/hamburger.json'
import rainbow from '../assets/animations/rainbow.json'
import thumb from '../assets/animations/thumb.json'
import heart from '../assets/animations/heart.json'

const Display = () => {

    const [animation, setAnimation] = React.useState([
        { name: 'check', animation: check },
        { name: 'menu', animation: menu },
        { name: 'rainbow', animation: rainbow },
        { name: 'heart', animation: heart },
        { name: 'thumb', animation: thumb },
    ])

    const [selected, setSelected] = React.useState(0)

    return (

        <div className="pageTemp">
            <DropDown animation={animation} setSelected={setSelected}></DropDown>
            <div className="frame">
                <Animation animation={animation[selected]}></Animation>
            </div>
        </div>

    )
}
export default Display
