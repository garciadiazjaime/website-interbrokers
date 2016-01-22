import React from 'react';

import Title1 from '../../../elements/titles/title1';


export default class Title extends React.Component {

  render() {
    return (<Title1 className="l">
        {this.props.children}
      </Title1>);
  }
}

Title.propTypes = {
  children: React.PropTypes.any,
};
