import * as t from './action-types';
import { v4 as uuid } from 'node-uuid';

export function add({name, projectId}={}) {
  return {
    type: t.ADD,
    payload: {
      id: uuid(),
      name,
      projectId
    }
  };
}

export function remove(id) {
  return {
    type: t.REMOVE,
    payload: {
      id
    }
  };
}
