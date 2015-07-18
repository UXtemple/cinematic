import objectToArray from '../utils/object-to-array';

export function listForProject(state, {projectId}) {
  return objectToArray(state).filter(i => i.projectId === projectId);
}
