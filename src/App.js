import React, { Component } from 'react';
import welcomeSketch from './sketches/welcome';
import spiralSketch from './sketches/spiral';
import trianglesSketch from './sketches/triangles';
import circleSketch from './sketches/circle';
import dragSketch from './sketches/drag';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';

class App extends Component {

  canvasWidth = 0;
  canvasHeight = 0;
  sketches = [welcomeSketch, spiralSketch, trianglesSketch, circleSketch, dragSketch];

  constructor(props) {
    super(props);
    this.setSpiral = this.setSpiral.bind(this);
    this.setTriangles = this.setTriangles.bind(this);
    this.setCircle = this.setCircle.bind(this);
    this.setDrag = this.setDrag.bind(this);
    this.state = {currentSketch: undefined};
  }

  componentDidMount() {
    this.setCanvasSize();
    this.setState({currentSketch: welcomeSketch});
  }

  setCanvasSize() {
    let size = Math.min(window.innerWidth - 44, window.innerHeight - 110);
    this.canvasWidth = this.canvasHeight = size;
    let canvasElement = window.document.getElementById('canvas');
    canvasElement.style.width = `${size}px`;
    canvasElement.style.height = `${size}px`;
  }
 
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
          <div id="canvas">
            {
              this.sketches.map((sketch, i) => (
                this.state.currentSketch === sketch && 
                <P5Wrapper key={i} sketch={sketch} canvasWidth={this.canvasWidth} canvasHeight={this.canvasHeight}></P5Wrapper>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
