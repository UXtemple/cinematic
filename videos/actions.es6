import * as t from './action-types';
import { v4 as uuid } from 'node-uuid';

export function add({cityId, number, music, musicTitle, tags=[], videoId}={}) {
  return {
    type: t.ADD,
    payload: {
      id: uuid(),
      cityId,
      number,
      music,
      musicTitle,
      tags,
      videoId
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
