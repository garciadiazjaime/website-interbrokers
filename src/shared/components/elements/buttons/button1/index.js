import React from 'react';
import { Link } from 'react-router';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Button1 extends React.Component {

  render() {
    return (
      <Link className={style[this.props.className]} to={this.props.href} title={this.props.title}>
        <div className={style.title}>{this.props.children}</div>
      </Link>

    );
  }
}

Button1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};
