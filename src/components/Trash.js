import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  render() {
    let image = '';
    if (this.props.isVisible) {
      image = <img src={ TrashIcon } alt="Trash" className="trash"></img>
    }

    return (
      <div className="bin">
       {image}
      </div>
    );
  }
}

export default Trash;
