import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Paragraph1 extends React.Component {

  render() {
    // todo: let's use className and href instead of classTitle/refs
    return (
      <p className={style[this.props.className]}>
        {this.props.children}
      </p>

    );
  }
}

Paragraph1.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
  className: React.PropTypes.string,
};
