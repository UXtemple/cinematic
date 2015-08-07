import cities from '../../cities/panel.json';
import fourK from '../../four-k/panel.json';
import i from 'seamless-immutable';
import projects from '../../projects/panel.json';
import usePanels from '../../usepanels/panel.json';
import videos from '../../videos/panel.json';

export default i({
  '10000cinematicflights.com.dev:3000': {
    lookup: ['/:projectId', '/:projectId/:cityId'],
    panels: {
      '/': projects,
      '/:projectId': cities,
      '/:projectId/:cityId': videos
    }
  },
  '4k.10000cinematicflights.com.dev:3000': {
    panels: {
      '/': fourK
    }
  },
  'usepanels.10000cinematicflights.com.dev:3000': {
    panels: {
      '/': usePanels
    }
  }
});
