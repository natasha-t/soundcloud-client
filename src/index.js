import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/stream';

const tracks = [
  {
    id: 1,
    title: 'Some title'
  },

  {
    id: 2,
    title: 'Some otha title'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Stream />,
  document.getElementById('app')
);

module.hot.accept();
