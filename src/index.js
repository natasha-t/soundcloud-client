import React from 'react';
import ReactDOM from 'react-dom';

const tracks = [
  {
    title: 'Some title'
  },

  {
    title: 'Some otha title'
  }
];

ReactDOM.render(
  <div>
    {tracks.map(track => {
      return <p> {track.title} </p>
    })}
  </div>,
  document.getElementById('app')
);

module.hot.accept();