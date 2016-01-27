import React from 'react';
import _ from 'lodash';

import Image1 from '../../elements/images/image1';
import Title1 from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';

import Engine1 from '../../engines/engine1';
import Template4 from '../template4';


export default class Template3 extends React.Component {

  renderServiceChild(data, href) {
    switch (_.isString(data.type) && data.type.toUpperCase()) {
      case 'TITLE':
        return (<Title1>
            {data.title}
          </Title1>);
      case 'SUBTITLE':
        return (<Title1>
            {data.title}
          </Title1>);
      case 'LIST':
        const categoryUrl = [href, data.href].join('/');
        const children = data.children.map((item) => {
          return {
            title: item.title,
            href: [href, data.href, item.href].join('/'),
          };
        });
        return (
          <div className="row">
              <div className="col-sm-6">
                <Image1 src="" alt="" className="" />
                <Button1 className="b" href={categoryUrl} title={data.title} />
                <Title1 className="" data={data.title} />
              </div>

              <div className="col-sm-6">
                <Engine1 data={children} Template={Template4} />
              </div>
            </div>
        );
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
    const { data } = this.props;
    return (<div>
      {this.renderBlock(data.children, data.href)}
    </div>);
  }
}

Template3.propTypes = {
  data: React.PropTypes.object.isRequired,
  href: React.PropTypes.any,
};
