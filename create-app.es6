import { createRedux } from 'redux';
import { reducer as cities } from './cities';
import { reducer as projects } from './projects';
// import { reducer as videos } from './videos';

export default function createApp(initialData) {
  return createRedux({
    cities,
    projects //,
    // videos
  }, initialData);
}
