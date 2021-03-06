import { ADD, REMOVE } from './action-types';
import i from 'seamless-immutable';

export default function videosReducer(state = i({}), action) {
  switch (action.type) {
    case ADD: return add(state, action.payload);
    case REMOVE: return remove(state, action.payload);
    default: return state;
  }
}

// FIXME why do I need immutable again?
function add(state, {id, cityId, hd, number, music, musicTitle, sd, videoId}) {
  return i(state).merge({[id]: {id, cityId, hd, number, music, musicTitle, sd, videoId}});
}

function remove(state, {id}) {
  const { [id]: video, ...rest } = state;
  return rest;
}
