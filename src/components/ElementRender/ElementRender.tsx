import { useState } from 'react';

function ElementRender() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>
      <h1>Element render</h1>
      <h3> It is {time}</h3>
    </div>
  );
}

export default ElementRender;
