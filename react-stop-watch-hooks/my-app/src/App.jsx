import React, { useState} from 'react';


function App() {
  const [time, setTime]  = useState(0)
  const [timer, setTimer] = useState(null)

  const handleClick = () => {
    if(!timer){
      setTimer(setInterval(() => setTime(prevTime => prevTime + 1), 1000))
    } else {
      clearInterval(timer)
      setTimer(null)
    }
  }

  return (
    <>
      <div className="circle row justify-center align-center">
        <span>{time}</span>
      </div>
      <div className="row justify-center">
        <button onClick={handleClick}>Click me!</button>
      </div>
    </>
  );
}

export default App;
