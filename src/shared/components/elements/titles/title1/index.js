import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title1 extends React.Component {

  render() {
    return (
      <h2 className={style[this.props.className]}>
        {this.props.children}
      </h2>
    );
  }
}

Title1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};
