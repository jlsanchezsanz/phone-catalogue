import PropTypes from 'prop-types';

export const PhonePropType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  screen: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  ram: PropTypes.number.isRequired
};
