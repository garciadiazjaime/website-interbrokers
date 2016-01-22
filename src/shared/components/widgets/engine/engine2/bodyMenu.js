import React from 'react';
import _ from 'lodash';

import BodyBlock from './bodyBlock';


export default class BodyMenu extends React.Component {

  renderyBody(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<BodyBlock data={item.children} key={index} />);
      });
    }
  }

  render() {
    const { data } = this.props;
    return (<div>
      {this.renderyBody(data)}
    </div>);
  }
}

BodyMenu.propTypes = {
  data: React.PropTypes.array.isRequired,
};
