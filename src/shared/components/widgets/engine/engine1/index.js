import React from 'react';
import _ from 'lodash';

import Image1 from '../../../elements/images/image1';
import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';


export default class Engine1 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index} className="col-sm-3">
          <Image1 src={item.image} alt={item.name} className="" />
          <Title1 className="k">
            {item.name}
          </Title1>
          <Paragraph1 className="">
            {item.role}
          </Paragraph1>
          <hr />
          <Paragraph1 className="">
            {item.tel}
            <br />
            {item.email}
          </Paragraph1>
        </div>);
      });
    }
  }

  render() {
    return (<div>
      {this.renderItems(this.props.data)}
    </div>);
  }
}

Engine1.propTypes = {
  data: React.PropTypes.array.isRequired,
};
