import React from 'react';

interface ClassComponentProps {
  name: string;
}
class ClassComponent extends React.Component<ClassComponentProps, any> {
  render() {
    return (
      <div>
        <h3>ClassComponent, {this.props.name}</h3>
      </div>
    );
  }
}

export default ClassComponent;
