import { useState } from 'react';

interface FunctionalComponentProps {
  value: string;
}

const FunctionalComponentState: React.FC<FunctionalComponentProps> = ({
  value,
}) => {
  const [name, setName] = useState(value);
  console.log('FunctionalComponentState render');
  return (
    <div>
      <h3>FunctionalComponentState, {name}</h3>
      <br></br>
      <button
        onClick={() => {
          setName('TSX - State - Updated');
        }}
      >
        Cambiar Nombre
      </button>
    </div>
  );
};

export default FunctionalComponentState;
