import React from 'react';








class Music extends React.Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    let song = document.getElementById('sound');
    song.volume = 0.2;
  }



  render() {
    return (
      <div>
        <audio id="sound" autoPlay loop>
          <source ref="song"
            src="./music/audiom.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    )
  }
}

export default Music;