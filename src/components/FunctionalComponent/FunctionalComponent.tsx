import { useState } from 'react';

interface FunctionalComponentProps {
  date: string;
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = ({ date }) => {
  const [count, setCount] = useState(date);
  setInterval(() => {
    setCount(new Date().toLocaleTimeString());
  }, 2000);
  return (
    <div>
      <h3>FunctionalComponent, {count}</h3>
    </div>
  );
};

export default FunctionalComponent;
