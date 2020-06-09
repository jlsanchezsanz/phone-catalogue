import React from 'react';
import PropTypes from 'prop-types';

export default function PhoneGallery(props) {
  return (
    <div className='gallery'>
      {props.images.map((image) => (
        <img
          key={image}
          className='image'
          src={require(`../../../../assets/${image}`)}
          alt={props.phoneName}
        />
      ))}
    </div>
  );
}

PhoneGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  phoneName: PropTypes.string.isRequired
};
