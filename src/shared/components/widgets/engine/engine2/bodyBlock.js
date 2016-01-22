import React from 'react';
import _ from 'lodash';

import Title from './title';
import Subtitle from './subtitle';
import List from './list';


export default class BodyBlock extends React.Component {

  renderServiceChild(data) {
    switch (data.type.toUpperCase()) {
      case 'TITLE':
        return (<Title>
            {data.title}
          </Title>);
      case 'SUBTITLE':
        return (<Subtitle>
            {data.title}
          </Subtitle>);
      case 'LIST':
        return (<List data={data} />);
      default:
        return null;
    }
  }

  renderBlock(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index}>
            {this.renderServiceChild(item)}
          </div>);
      });
    }
  }

  render() {
    const { data } = this.props;
    return (<div>
      {this.renderBlock(data)}
    </div>);
  }
}

BodyBlock.propTypes = {
  data: React.PropTypes.array.isRequired,
};
