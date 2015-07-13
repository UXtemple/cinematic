import * as DUMMY_DATA from './dummy-data';
import { createPanelsRuntime } from 'panels-runtime';
import React from 'react';
import ReactDOM from 'react-dom';

const instance = createPanelsRuntime(DUMMY_DATA);

ReactDOM.render(<instance.App />, document.getElementById('playground-container'));

window.Playground = {
  boxhouse() { return instance.redux.getState().contexts['cinematica.com.dev:3000'] },
  instance
};

console.log('Welcome to boxhouse playground.');
console.log('https://boxhouse.uxtemple.com');
console.log('Playground module', Playground);
