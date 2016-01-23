import React from 'react';
import _ from 'lodash';

import Title from './title';
import Subtitle from './subtitle';
import List from './list';


export default class BodyBlock extends React.Component {

  renderServiceChild(data, href) {
    switch (_.isString(data.type) && data.type.toUpperCase()) {
      case 'TITLE':
        return (<Title>
            {data.title}
          </Title>);
      case 'SUBTITLE':
        return (<Subtitle>
            {data.title}
          </Subtitle>);
      case 'LIST':
        return (<List data={data} href={href} />);
      default:
        return null;
    }
  }

  renderBlock(data, href) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index}>
            {this.renderServiceChild(item, href)}
          </div>);
      });
    }
    return null;
  }

  render() {
    const { data, href } = this.props;
    return (<div>
      {this.renderBlock(data, href)}
    </div>);
  }
}

BodyBlock.propTypes = {
  data: React.PropTypes.array.isRequired,
  href: React.PropTypes.string.isRequired,
};
