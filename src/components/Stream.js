import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track) => {
          return <div className="track" key={track.id}>{track.title}</div>;
        })
      }
    </div>
  );
}

export default Stream;
