import React from 'react';
import _ from 'lodash';

import Image1 from '../../../elements/images/image1';
import Title1 from '../../../elements/titles/title1';
import Button1 from '../../../elements/buttons/button1';


export default class List extends React.Component {

  renderChildren(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<li key={index}>
            <Button1 href={item.href} className="m" title={item.title} data={item.title} />
          </li>);
      });
    }
    return null;
  }

  render() {
    const { data } = this.props;
    return (<div className="row">
        <div className="col-sm-6">
          [img]
          <Image1 src="" alt="" className="" />
          <Button1 className="b" href={data.href} title={data.title} />
          <Title1 className="" data={data.title} />
        </div>

        <div className="col-sm-6">
          <ul>
            {this.renderChildren(data.children)}
          </ul>
        </div>
      </div>);
  }
}

List.propTypes = {
  data: React.PropTypes.object.isRequired,
};