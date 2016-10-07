import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import ChessGame from './ChessGame';

const Hello = React.createClass({
  render() {
    return(
      <div>
        Zdar ...
        <ChessGame />
      </div>
    )
  }
});

export default Hello;
