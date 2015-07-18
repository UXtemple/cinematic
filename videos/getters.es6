import objectToArray from '../utils/object-to-array';

export function listForCity(state, {cityId}) {
  return objectToArray(state).filter(i => i.cityId === cityId);
}
