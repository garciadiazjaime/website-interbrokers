import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';

export default class HeaderMenu extends React.Component {

  renderHeader(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index} className="col-sm-3">
            <Wrapper1 className={item.className}>
              <Title1 className="">
                {item.title}
              </Title1>
              <Button1 className="b" href={item.href} title={item.title} />
              <Paragraph1 className="" data={item.description} />
            </Wrapper1>
          </div>);
      });
    }
    return null;
  }

  render() {
    const { data } = this.props;
    return (<div className="row">
      {this.renderHeader(data)}
    </div>);
  }
}

HeaderMenu.propTypes = {
  data: React.PropTypes.array.isRequired,
};
