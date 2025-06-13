import React from 'react'
import PropTypes from 'prop-types';


export default function Cards(props) {
  return (
    <div className='card'>
      <div className='inner-card'>
        <div className='front-card'>
          <h2>{props.Name}</h2>
          <img src={props.img} alt="samplepic" />
        </div>
        <div className='back-card'>
          <p>{props.C}</p>
        </div>
      </div>
    </div>
  )
}
Cards.propTypes = {
  Name: PropTypes.string,
  img: PropTypes.string,
  C: PropTypes.string
};


Cards.defaultProps = {
  Name: 'Default Name',
  img: 'https://via.placeholder.com/150',
  C: 'Default Content'
};

