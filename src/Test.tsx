import * as React from 'react';

export interface Props {
  name: string;
}

export interface State {
  age: number;
}

class Test extends React.Component<Props, State> {
  render() {
    return (
      <div className="Test">
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Test;
