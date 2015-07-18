import cities from '../../cities/panel.json';
import i from 'seamless-immutable';
import projects from '../../projects/panel.json';
import videos from '../../videos/panel.json';

export default i({
  '10000cinematicflights.com.dev:3000': {
    lookup: ['/:projectId', '/:projectId/:cityId'],
    panels: {
      '/': projects,
      '/:projectId': cities,
      '/:projectId/:cityId': videos
    }
  }
});
