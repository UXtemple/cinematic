import * as t from './action-types';
import { v4 as uuid } from 'node-uuid';

export function add({name}={}) {
  return {
    type: t.ADD,
    payload: {
      id: uuid(),
      name
    }
  }
}

export function remove(id) {
  return {
    type: t.REMOVE,
    payload: {
      id
    }
  }
}
