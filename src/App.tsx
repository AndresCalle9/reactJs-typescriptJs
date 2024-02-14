import HelloWorld from './components/HelloWorld/HelloWorld';
import JsxApp from './components/JsxApp/JsxApp';
import ElementRender from './components/ElementRender/ElementRender';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ClassComponentState from './components/ClassComponentState/ClassComponentState';

function App() {
  return (
    <>
      <HelloWorld name='react' />
      <p>------------------</p>
      <JsxApp />
      <p>------------------</p>
      <ElementRender />
      <p>------------------</p>
      <FunctionalComponent date={new Date().toLocaleTimeString()} />
      <p>------------------</p>
      <ClassComponent name='TSX' />
      <p>------------------</p>
      <ClassComponentState name='TSX - State' />
    </>
  );
}

export default App;
