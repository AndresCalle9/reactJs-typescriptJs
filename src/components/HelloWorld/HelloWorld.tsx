import './_helloworld.scss';
interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return (
    <>
      <div className='container-1'>
        <h1>Hola mundo, {name}</h1>
      </div>
      <p>Esto es un ejemplo de React con TypeScript</p>
    </>
  );
};

export default HelloWorld;
