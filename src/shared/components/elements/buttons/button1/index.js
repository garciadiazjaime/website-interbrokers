import React from 'react';
import { Link } from 'react-router';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import sanitize from '../../../../utils/sanitize';


export default class Button1 extends React.Component {

  render() {
    const children = this.props.data ? sanitize(this.props.data) : this.props.children;
    return (
      <Link className={style[this.props.className]} to={this.props.href} title={this.props.title}>
        {
          this.props.data ?
          <div className={style.title} dangerouslySetInnerHTML={children} />
          : <div className={style.title}>{this.props.children}</div>
        }
      </Link>
    );
  }
}

Button1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.string,
};
