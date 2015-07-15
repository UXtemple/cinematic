import * as DUMMY_DATA from './dummy-data';
import { createPanelsRuntime } from 'panels-runtime';
import React from 'react';
import ReactDOM from 'react-dom';

const instance = createPanelsRuntime(DUMMY_DATA);

ReactDOM.render(<instance.App />, document.getElementById('playground-container'));

window.Playground = {
  cinematic() { return instance.redux.getState().contexts['10000cinematicflights.com.dev:3000'] },
  instance
};

console.log('Welcome to 10000 Cinematic Flights playground.');
console.log('https://10000cinematicflights.com');
console.log('Playground module', Playground);
