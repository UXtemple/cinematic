import projects from '../../projects/panel.json';
import i from 'seamless-immutable';

export default i({
  '10000cinematicflights.com.dev:3000': {
    panels: {
      '/': projects
    }
  }
});
