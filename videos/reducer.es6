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
function add(state, {id, cityId, number, music, musicTitle, videoId}) {
  return i(state).merge({[id]: {id, cityId, number, music, musicTitle, videoId}});
}

function remove(state, {id}) {
  const { [id]: video, ...rest } = state;
  return rest;
}
