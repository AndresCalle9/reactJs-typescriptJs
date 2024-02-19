import HelloWorld from './components/HelloWorld/HelloWorld';
import JsxApp from './components/JsxApp/JsxApp';
import ElementRender from './components/ElementRender/ElementRender';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ClassComponentState from './components/ClassComponentState/ClassComponentState';
import FunctionalComponentState from './components/FunctionalComponentState/FunctionalComponentState';
import ChildComponent from './components/ChildComponent/ChildComponent';
import UseHooks from './components/UsageHooks/UsageHooks';

function App() {
  return (
    <>
      <a href='/landing'>Landing</a>
      <a href='/tasksApp'>Tasks App</a>
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
      <p>------------------</p>
      <FunctionalComponentState value='test' />
      <p>------------------</p>
      <ChildComponent
        name='Andrés'
        lastName='Calle'
        lastName2='Uribe'
        age={31}
        clickReturnName={(fullName: string) => {
          console.log('FatherComponent, ', fullName);
        }}
      />
      <p>------------------</p>
      <UseHooks />
    </>
  );
}

export default App;
