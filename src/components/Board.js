import React, { Component } from 'react';
import Field from './Field';


const Board = React.createClass({
  handleClick: function () {
    console.log('Kliknul jsi---v rodicovy');
  },

  render() {
    return(
      <div>
        BOARD Start
        <div className="radek">
          <Field row="8" column="1" clicker={this.handleClick}/>
          <Field row="8" column="2" />
          <Field row="8" column="3" />
          <Field row="8" column="4" />
          <Field row="8" column="5" />
          <Field row="8" column="6" />
          <Field row="8" column="7" />
        </div>

        <div className="radek">
          <Field row="7" column="1" />
          <Field row="7" column="2" />
          <Field row="7" column="3" />
          <Field row="7" column="4" />
          <Field row="7" column="5" />
          <Field row="7" column="6" />
          <Field row="7" column="7" />
        </div>

        <div className="radek">
          <Field row="6" column="1" />
          <Field row="6" column="2" />
          <Field row="6" column="3" />
          <Field row="6" column="4" />
          <Field row="6" column="5" />
          <Field row="6" column="6" />
          <Field row="6" column="7" />
        </div>

        <div className="radek">
          <Field row="5" column="1" />
          <Field row="5" column="2" />
          <Field row="5" column="3" />
          <Field row="5" column="4" />
          <Field row="5" column="5" />
          <Field row="5" column="6" />
          <Field row="5" column="7" />
        </div>

        <div className="radek">
          <Field row="4" column="1" />
          <Field row="4" column="2" />
          <Field row="4" column="3" />
          <Field row="4" column="4" />
          <Field row="4" column="5" />
          <Field row="4" column="6" />
          <Field row="4" column="7" />
        </div>

        <div className="radek">
          <Field row="3" column="1" />
          <Field row="3" column="2" />
          <Field row="3" column="3" />
          <Field row="3" column="4" />
          <Field row="3" column="5" />
          <Field row="3" column="6" />
          <Field row="3" column="7" />
        </div>

        <div className="radek">
          <Field row="2" column="1" />
          <Field row="2" column="2" />
          <Field row="2" column="3" />
          <Field row="2" column="4" />
          <Field row="2" column="5" />
          <Field row="2" column="6" />
          <Field row="2" column="7" />
        </div>

        <div className="radek">
          <Field row="1" column="1" />
          <Field row="1" column="2" />
          <Field row="1" column="3" />
          <Field row="1" column="4" />
          <Field row="1" column="5" />
          <Field row="1" column="6" />
          <Field row="1" column="7" />
        </div>

      </div>
    )
  }
});

export default Board;
