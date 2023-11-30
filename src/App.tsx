import { useState } from 'react';
import './App.css';

function App() {
  const [ letterClass, setLetterClass ] = useState('letter closed')
  const [ buttonName, setButtonName ] = useState('Open Letter');

  const handleButtonClick = () => {
    setLetterClass(
      letterClass === 'letter closed'
        ? 'letter' : 'letter closed'
    );
    setButtonName(
      buttonName === 'Open Letter'
        ? 'Close Letter' : 'Open Letter'
    )
  }

  return (
    <div className="container">
      <h1 className="title">
        Version ✌🏿 Coming Soon<span>.</span><span>.</span><span>.</span>
      </h1>
      <div className={letterClass}>
        {/* TODO decrease font size for the letter (use em instead) */}
        {/* TODO increase width to 80%, max width of like 910px or something. */}
        <p>
          I really did try to get the album out this year. I wanted to make the
          rollout something that hadn't been seen from an artist like me. I
          wasn't worried about how much money or time that would cost me. In
          fact, I welcomed the challenge. However, I never expected my mental
          state, nor my life itself, to play such a huge role in when and how I
          got this done. I've always been a "thug it out" type of dude, but now
          that means thugging out the emotions and other things that come with
          being a 25-year-old human, which sometimes means I don't have the time
          or energy to do the things I've been wanting to do. Hopefully that
          makes sense. I also realized that I had no idea what this album was
          really about. I had a concept, and I've recorded songs with people, but
          honestly, I had no endgame for a while. I had to go figure that out,
          which has led to some soul-searching, and a bit of time away from the
          music iteslf. Basically, I'm trying to take care of myself, so that
          when the album and other musical adventures do drop, it's as
          mind-blowing as I know it will be. Everything from the music itself,
          down to what I'm posting on social media has a plan, but I just need to
          make sure I'm okay first, before I try to give everything I have left
          to this project, and potentially hurting myself in the process.
        </p>
        <p>
          I know. "Blah blah blah. F*** yo' self-healing, n****. Heal my
          eardrums. When's the album dropping?" I won't say soon. That would
          imply some time in the coming weeks or months. I will say that
          <i>hopefully</i>, something is coming in that time. Something very
          special to me, that I'm excited for y'all to hear. When THEE album is
          coming <i>soon</i> though, y'all will know. Trust me 😉. What I will
          say is that the goal is 2024. Preferrably in the summertime, but if
          it isn't possible, I won't force it. For now, just know that I
          appreciate you for even reading this. It's asking a lot for people
          outside of my inner circle of friends and family who might actually
          listen to one song that I've released to care about anything I do,
          regardless of the platform, so thanks for reading.
        </p>
        <p>
          "Zae's Crib" is coming soon.🙂
        </p>
        <br />
        <p className="signature">
          Stay Splendiferous,<br />Isaiah
        </p>
        <br />
        <p>
          P.S. The above statements apply to the website as well. This 💩 is
          taking forever, but I promise it's a part of the rollout. I just
          don't have the money to get some help from people and I refuse to let
          my smart friends work for free when they all have lives that they
          are living. Especially considering that I'm doing everything that I
          don't have to do because of this stupid promise I made to
          myself...<br /><br />Sorry. Started rambling there. As you were.
        </p>
      </div>
      <button onClick={handleButtonClick}>{buttonName}</button>
    </div>
  )
}

export default App;
