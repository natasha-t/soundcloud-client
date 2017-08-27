import React from 'react';
import ReactDOM from 'react-dom';

export default class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tracks = [] } = this.props;

    console.log('tracks', tracks);
    
    return (
      <div className='tracks'>
      {
        tracks.map(track => {
          return <div key={track.id} className="track"> {track.title} </div>
        })
      }
      </div>
    )
  }
}