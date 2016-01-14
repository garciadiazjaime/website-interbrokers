import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Title1 extends React.Component {

  render() {
    // todo: let's use className and href instead of classTitle/refs
    return (
      <h2 className={style[this.props.className]}>
        {this.props.children}
      </h2>

    );
  }
}

Title1.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
  className: React.PropTypes.string,
};
