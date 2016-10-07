import React, { Component } from 'react';

const Field = React.createClass({
  render: function() {
    return(
      <div className="bunka" >
        <button onClick={this.clickerr}>TEST</button>
        S:{this.props.column} R:{this.props.row}
      </div>
    )
  },

  clickerr: function () {
    console.log("Stisknuto...Volani z komponenty");
    this.props.clicker();
  }
});

export default Field;
