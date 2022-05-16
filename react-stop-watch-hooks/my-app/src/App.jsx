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
  const handleReset = () => {
    clearInterval(timer)
    setTime(0)

  }

  return (
    <>
      <div className="circle row justify-center align-center">
        <span>{time}</span>
      </div>
      <div className="row justify-center">
        <button onClick={handleClick}>Timer</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
