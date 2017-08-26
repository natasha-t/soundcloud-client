import React from 'react';
import ReactDOM from 'react-dom';

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
  <div>
    {
      tracks.map(track => {
        return <div key={track.id} className="track"> {track.title} </div>
      })
    }
  </div>,
  document.getElementById('app')
);

module.hot.accept();