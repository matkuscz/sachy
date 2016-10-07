import React, { Component } from 'react';
import Board from './Board';
import '../assets/stylesheets/base.scss'



const ChessGame = React.createClass({
  render() {
    return(
      <div className="test">
        Sachy :
        <Board />
      </div>
    )
  }
});

export default ChessGame;
