const name = 'Andrés Calle';
const element = <h1>Hola, {name}</h1>;

const formatName = (user: any) => {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'Antonia',
  lastName: 'Calle',
};

const url = 'https://es.reactjs.org/docs/introducing-jsx.html';

const testAhref = (
  <a href={url} target='_blank'>
    Introducción a TSX
  </a>
);

function JsxApp() {
  return (
    <div>
      {name}
      {element}
      <h1> Hello, {formatName(user)}</h1>
      {testAhref}
    </div>
  );
}

export default JsxApp;
