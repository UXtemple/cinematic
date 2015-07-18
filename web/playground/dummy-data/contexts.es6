import cities from '../../../cities/dummy-data';
import createApp from '../../../create-app';
import i from 'seamless-immutable';
import projects from '../../../projects/dummy-data';
import videos from '../../../videos/dummy-data';

export default i({
  '10000cinematicflights.com.dev:3000': createApp({cities, projects, videos})
});
