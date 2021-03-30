import React from 'react'
import '../style/Display.css'

const DropDownMenu = (props) => {

    const handleChange = (event) => {
        event.preventDefault()
        props.setSelected(event.target.value)
    }

    return (
        <div>
            <form className="dropdown">
                <label>Select an Animation</label>
                <select className="menu" onChange={handleChange}>
                    {props.animation.map((anim, index) => (
                        <option key={index} value={index}>{anim.name}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default DropDownMenu
