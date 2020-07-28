import React from 'react';
import Sound from 'react-sound';
import beyonceSong from './bey.mp3';

export default function Gamesound() {
    return (
      <Sound
        url={beyonceSong}
        playStatus={Sound.status.PLAYING}
        volume={10}
        autoLoad={true}
        loop={true}
      />
    );
  }