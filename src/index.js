import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Stream tracks={tracks}/>,
  document.getElementById('app')
);

module.hot.accept();