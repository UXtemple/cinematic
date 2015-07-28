import objectToArray from '../utils/object-to-array';

export function listForProject(state, {projectId}) {
  return objectToArray(state)
    .filter(i => i.projectId === projectId)
    .sort(({name: a}, {name: b}) => a < b ? -1 : (a > b ? 1 : 0))
}
