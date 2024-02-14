import React from 'react';

interface ClassComponentProps {
  name: string;
}
class ClassComponent extends React.Component<
  ClassComponentProps,
  ClassComponentState
> {
  constructor(props: ClassComponentProps) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    console.log('ClassComponent constructor');
  }
  render() {
    return (
      console.log('ClassComponent render'),
      (
        <div>
          <h3>ClassComponent, {this.state.name}</h3>
          <br></br>
          <button
            onClick={() => {
              this.setState({ name: 'TSX - State - Updated' });
            }}
          >
            Cambiar Nombre
          </button>
        </div>
      )
    );
  }
  componentDidMount() {
    console.log('ClassComponent componentDidMount');
  }
  componentDidUpdate(
    prevProps: Readonly<ClassComponentProps>,
    prevState: Readonly<ClassComponentState>,
    snapshot?: any
  ): void {
    console.log(
      'ClassComponent componentDidUpdate',
      prevProps,
      prevState,
      snapshot
    );
  }
  componentWillUnmount() {
    console.log('ClassComponent componentWillUnmount');
  }
}

interface ClassComponentState {
  name: string;
}

export default ClassComponent;
