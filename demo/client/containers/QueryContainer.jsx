import React from "react";

const QueryContainer = props => {
    // function Easteregg() {
    //     console.log('in oowwee')
    //     const poopy = document.createElement('img');
    //     body.append(poopy);
    // };

    function Easteregg(event) {
        event.preventDefault();
        console.log('in here')
        const poopy = document.createElement('img');
        poopy.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73ef1cdf-f14d-41ed-968f-f73b512441e2/dbul984-d6fc34ba-85f9-452b-8370-b57d716d3615.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczZWYxY2RmLWYxNGQtNDFlZC05NjhmLWY3M2I1MTI0NDFlMlwvZGJ1bDk4NC1kNmZjMzRiYS04NWY5LTQ1MmItODM3MC1iNTdkNzE2ZDM2MTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ny7wCDykq3EeQejZfJs2Mftd91RX3Zvqx3yFFIPJP68";
        poopy.style.position = 'fixed';
        // poopy.style.left = '-500px';
        poopy.style.top = '20%';
        poopy.style.height = '400px';
        poopy.style.transition = '5s ease all';
        poopy.style.zIndex = '1000';
        poopy.style.transform = 'rotate(0)';
        //audio
        const ooe = document.createElement('audio');
        ooe.src = '../assets/mpb-audio.mp3'
        ooe.play();
        document.getElementById('root').append(poopy);
      };

    function Sandstorm(event) {
        event.preventDefault();

        //sandstorm
        const audio = new Audio(
            'https://iringtone.net/rington/file?id=8454&type=sound&name=mp3'
          );
        audio.play();

        const app = document.getElementById('root');
        app.classList.add('easter-egg');
        const colorGen = () => {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          return 'rgb(' + r + ',' + g + ',' + b + ')';
        };
        setInterval(() => {
          const elements = document.querySelectorAll('*');
          for (let i = 0; i < elements.length; i += 1) {
            elements[i].style.backgroundColor = `${colorGen()}`;
            elements[i].style.color = `${colorGen()}`;
            elements[i].style.fill = `${colorGen()}`;
          }
        }, 100);
    };

  return (
    <div className="query-container">
      <h4 className="query-container-title">Query</h4>
      <form className="message-send">
        Name:{" "}
        <input
          type="text"
          className="fname"
          placeholder="Name"
          value={props.name}
          onChange={props.nameHandler}
        />
        <br />
        Message:{" "}
        <input
          type="text"
          className="lname"
          placeholder="Message"
          value={props.message}
          onChange={props.messageHandler}
        />
        <br />
        <input type="submit" value="Submit" onClick={props.queryPost} />
      </form>

      <form className="message-get">
        Name:{" "}
        <input
          type="text"
          className="fname"
          placeholder="Name"
          value={props.nameGet}
          onChange={props.nameGetHandler}
        />
        <br />
        <input type="submit" value="Get Message" className="get-message-button" onClick={props.queryGet} />
        <br/>
        <input type="submit" value="Oowwee" className="oowwee" onClick={Easteregg}/>
        <br />
        <input type="submit" value="Acid" className="sandstorm" onClick={Sandstorm}/>
      </form>
    </div>
  );
};

export default QueryContainer;
