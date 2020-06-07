import React from 'react';
import PropTypes from 'prop-types';

import { PhonePropType } from '../../../../prop-types/phone.prop-type';
import './PhoneSpecs.css';

export default function PhoneSpecs(props) {
  return (
    <div className='specs'>
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
  );
}

PhoneSpecs.propTypes = {
  phone: PropTypes.shape(PhonePropType).isRequired
};
