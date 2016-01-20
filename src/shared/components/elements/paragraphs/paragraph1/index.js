import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import sanitize from '../../../../utils/sanitize';

export default class Paragraph1 extends React.Component {

  render() {
    const children = sanitize(this.props.children);
    return (
      <p className={style[this.props.className]} dangerouslySetInnerHTML={children} />
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
