import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
});
