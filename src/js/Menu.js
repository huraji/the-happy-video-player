import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }
  render() {
    return (
      <form onClick={this.handleClick} >
        <input type="radio" name="src" value="apnea" /> Apnea
        <input type="radio" name="src" value="mai" /> Mai Piú
        <input type="radio" name="src" value="pugile" /> Pugile
        <input type="radio" name="src" value="dasein" /> Dasein Sollen
      </form>
    );
  }
}