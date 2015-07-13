import createApp from '../../../create-app';
import i from 'seamless-immutable';
import projects from '../../../projects/dummy-data';

export default i({
  'cinematica.com.dev:3000': createApp({projects})
});
