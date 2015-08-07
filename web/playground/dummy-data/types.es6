import Cities from '../../cities/type';
import FourK from '../../four-k/type';
import i from 'seamless-immutable';
import Projects from '../../projects/type';
import UsePanels from '../../usepanels/type';
import Videos from '../../videos/type';

export default i({
  '10000cinematicflights.com.dev:3000': {
    Cities,
    Projects,
    Videos
  },
  '4k.10000cinematicflights.com.dev:3000': {
    FourK
  },
  'usepanels.10000cinematicflights.com.dev:3000': {
    UsePanels
  }
});
