import { ADD, REMOVE } from './action-types';
import i from 'seamless-immutable';

export default function citiesReducer(state = i({}), action) {
  switch (action.type) {
    case ADD: return add(state, action.payload);
    case REMOVE: return remove(state, action.payload);
    default: return state;
  }
}

// FIXME why do I need immutable again?
function add(state, {id, name}) {
  return i(state).merge({[id]: {id, name}});
}

function remove(state, {id}) {
  const { [id]: city, ...rest } = state;
  return rest;
}
