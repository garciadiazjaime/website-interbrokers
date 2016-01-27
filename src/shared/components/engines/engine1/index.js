import React from 'react';
import _ from 'lodash';


export default class Engine3 extends React.Component {

  renderElement(data, Template) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<Template data={item} key={index} />);
      });
    }
  }

  render() {
    const { data, Template } = this.props;
    return (<div>
      {this.renderElement(data, Template)}
    </div>);
  }
}

Engine3.propTypes = {
  data: React.PropTypes.array.isRequired,
  Template: React.PropTypes.any,
};
