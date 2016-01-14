import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Wrapper1 extends React.Component {

  render() {
    // todo: let's use className and href instead of classTitle/refs
    return (
      <div className={'row ' + style[this.props.className]}>
        {this.props.children}
      </div>

    );
  }
}

Wrapper1.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
  className: React.PropTypes.string,
};
