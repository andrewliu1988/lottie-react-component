import React from 'react';

const DropDown = (props) => {

    const handleChange = (event) => {
        event.preventDefault()
        props.setSelected(event.target.value)
    }

    return (
        <div>
            <form>
                <label>Lottie Files</label>
                <select onChange={handleChange}>
                    {props.animation.map((anim, index) => (
                        <option key={index} value={index}>{anim.name}</option>
                    ))}
                </select>
            </form>
        </div>
    );
}

export default DropDown;
