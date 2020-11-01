import P5Wrapper from 'react-p5-wrapper';
const { Component } = require("react");

class Canvas extends Component {

  render() {
    return (
      <div id="container">
        <P5Wrapper sketch={this.props.currentSketch}></P5Wrapper>
      </div>
    )
  }
}

export default Canvas;