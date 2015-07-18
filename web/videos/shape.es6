import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
