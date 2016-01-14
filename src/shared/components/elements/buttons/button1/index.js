import React from 'react';
import { Link } from 'react-router';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Button1 extends React.Component {

  render() {
    return (
      <Link className={style[this.props.className]} to={this.props.href}>
        <div className={style.title}>{this.props.children}</div>
      </Link>

    );
  }
}

Button1.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
  className: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
};
