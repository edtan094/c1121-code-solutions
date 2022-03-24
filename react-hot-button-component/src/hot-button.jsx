import React, { useState } from 'react';

export default function HotButton(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hello there! You click {count} times</p>
      <ColorCounter counter={count} setCount={() => setCount(prevState => prevState + 1)}/>
    </div>
  );
}

function ColorCounter({ counter, setCount }) {
  if (counter >= 18) {
    return <button className="eighteen" onClick={setCount}>Click Me</button>;
  } else if (counter >= 15) {
    return <button className="fifteen" onClick={setCount}>Click Me</button>;
  } else if (counter >= 12) {
    return <button className="twelve" onClick={setCount}>Click Me</button>;
  } else if (counter >= 9) {
    return <button className="nine" onClick={setCount}>Click Me</button>;
  } else if (counter >= 6) {
    return <button className="six" onClick={setCount}>Click Me</button>;
  } else if (counter >= 3) {
    return <button className="three" onClick={setCount}>Click Me</button>;
  } else {
    return <button onClick={setCount}>Click Me</button>;
  }
}
