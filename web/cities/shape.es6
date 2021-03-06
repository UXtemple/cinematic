import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired
});
