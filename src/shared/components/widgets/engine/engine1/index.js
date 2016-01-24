import React from 'react';
import _ from 'lodash';

import Image1 from '../../../elements/images/image1';
import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';


export default class Engine1 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index} className="col-xs-12 col-sm-3">
          <Wrapper1 className="v">
            <Image1 src={item.image} alt={item.name} className="c" />
            <Title1 className="k">
              {item.name}
            </Title1>
            <Paragraph1 className="f2">
              {item.role}
            </Paragraph1>
            <Paragraph1 className="f">
              {item.tel}
              <br />
              {item.email}
            </Paragraph1>
          </Wrapper1>
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
