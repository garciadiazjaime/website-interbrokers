import React from 'react';
import { Link } from 'react-router';


export default class ElementBuilder extends React.Component {

  getLink(data) {
    const { href, title } = data;
    return (<Link to={href} title={title}>{title}</Link>);
  }

  render() {
    const { type, data } = this.props;

    switch (type.toUpperCase()) {
      case 'LINK':
        return this.getLink(data);
      default:
        return null;
    }
  }
}

ElementBuilder.propTypes = {
  type: React.PropTypes.string.isRequired,
  data: React.PropTypes.object.isRequired,
};
