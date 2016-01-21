import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class SimpleText extends React.Component {

  render() {
    return (
      <span className={style[this.props.className]} />

    );
  }
}

SimpleText.propTypes = {
  className: React.PropTypes.string,
};
