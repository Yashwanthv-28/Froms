import React from 'react'
import PropTypes from 'prop-types';


export default function Card2(props) {
    const handleMouseEnter = (event) => {
        event.currentTarget.classList.add("flipped")
    }
    const handleMouseLeave = (event) => {
        event.currentTarget.classList.remove("flipped")
    }
    return (
        <div className='card2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='card2-inner'>
                <div className='card2-front'>
                    <h2>{props.Name}</h2>
                    <img src={props.img} alt="samplepic" />
                </div>
                <div className='card2-back'>
                    <p>{props.C}</p>
                </div>
            </div>
        </div>
    )
}
Card2.propTypes = {
    Name: PropTypes.string,
    img: PropTypes.string,
    C: PropTypes.string
};


Card2.defaultProps = {
    Name: 'Default Name',
    img: 'https://via.placeholder.com/400/300',
    C: 'Default Content'
};

