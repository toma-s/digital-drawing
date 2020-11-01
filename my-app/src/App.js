import React, { Component } from 'react';
import welcomeSketch from './sketches/welcome';
import spiralSketch from './sketches/spiral';
import trianglesSketch from './sketches/triangles';
import circleSketch from './sketches/circle';
import dragSketch from './sketches/drag';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';

class App extends Component {

  canvasWidth = 400;
  canvasHeight = 400;

  constructor(props) {
    super(props);
    this.setSpiral = this.setSpiral.bind(this);
    this.setTriangles = this.setTriangles.bind(this);
    this.setCircle = this.setCircle.bind(this);
    this.setDrag = this.setDrag.bind(this);
    this.state = {currentSketch: welcomeSketch};
  }

  // todo: refactor duplicates
  // todo: handle canvas size var
  // todo: handle canvas size change
  // todo: add border

  setSpiral() {
    this.setState({currentSketch: spiralSketch});
  }

  setTriangles() {
    this.setState({currentSketch: trianglesSketch});
  }

  setCircle() {
    this.setState({currentSketch: circleSketch});
  }

  setDrag() {
    this.setState({currentSketch: dragSketch});
  }


  render() {
    return (
      <div>
        <div id="mode">
          <button id="spiral" onClick={this.setSpiral}>Spiral</button>
          <button id="triangles" onClick={this.setTriangles}>Triangles</button>
          <button id="circle" onClick={this.setCircle}>Circle</button>
          <button id="drag" onClick={this.setDrag}>Drag</button>
        </div>
        <div id="container">
          {this.state.currentSketch === welcomeSketch && <P5Wrapper sketch={welcomeSketch}></P5Wrapper>}
          {this.state.currentSketch === spiralSketch && <P5Wrapper sketch={spiralSketch}></P5Wrapper>}
          {this.state.currentSketch === trianglesSketch && <P5Wrapper sketch={trianglesSketch}></P5Wrapper>}
          {this.state.currentSketch === circleSketch && <P5Wrapper sketch={circleSketch}></P5Wrapper>}
          {this.state.currentSketch === dragSketch && <P5Wrapper sketch={dragSketch}></P5Wrapper>}
        </div>
        {/* <Canvas currentSketch={this.state.currentSketch} /> */}
      </div>
    )
  }
}

export default App;
