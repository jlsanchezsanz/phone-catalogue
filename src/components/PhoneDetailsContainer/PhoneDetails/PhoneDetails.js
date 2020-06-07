import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PhonePropType } from '../../../prop-types/phone.prop-type';
import './PhoneDetails.css';

function PhoneDetails(props) {
  return (
    <div className='details'>
      <Link to='/phones'>All phones</Link>
      <div className='details__wrapper'>
        <div className='details__img-gallery'>
          <img
            className='image'
            src={require(`../../../assets/${props.phone.imageFileName}`)}
            alt={props.phone.name}
          />
        </div>
        <div className='details__info'>
          <h1>
            {props.phone.manufacturer} {props.phone.name} {props.phone.color}
          </h1>
          <div className='info__price'>{props.phone.price} €</div>
          <button type='button' class='btn btn-info'>
            Add to cart
          </button>
        </div>
      </div>
      <div className='details__wrapper details__specifications'>
        <h4>SPECS</h4>
        <ul className='list-group'>
          <li className='list-group-item' key='screen'>
            <dl>
              <dt>Screen:</dt>
              <dd>{props.phone.screen}</dd>
            </dl>
          </li>
          <li className='list-group-item' key='processor'>
            <dl>
              <dt>Processor:</dt>
              <dd>{props.phone.processor}</dd>
            </dl>
          </li>
          <li className='list-group-item' key='ram'>
            <dl>
              <dt>Memory:</dt>
              <dd>{props.phone.ram}GB RAM</dd>
            </dl>
          </li>
          <li className='list-group-item' key='description'>
            <dl>
              <dt>Description:</dt>
              <dd>{props.phone.description}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
}

PhoneDetails.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};

export default PhoneDetails;
