import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

export default class Random extends React.Component {
  
  constructor(props) {
    super(props);
  this.state = { color: [55, 33, 92] }; 
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(
      {color:this.chooseColor()
      });
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
         <h1>
         <u >Random Colour Generator.  </u>
         </h1>
        <h1 className={this.isLight() ? 'white' : 'black'}>
      Your color is {this.formatColor(this.state.color)}

        </h1>
		<Button onClick={this.handleClick} light={this.isLight()} />
      </div>
    );
  }
}

ReactDOM.render(
    <Random />, 
    document.getElementById('root')
  );