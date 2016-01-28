import React from 'react';
import _ from 'lodash';

import Row1 from '../../../elements/rows/row1/';
import Title1 from '../../../elements/titles/title1';
import Button1 from '../../../elements/buttons/button1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';


export default class Intro extends React.Component {

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? 'f1' : 'f';
        return (
          <Paragraph1 className={className} key={index}>
            {item}
          </Paragraph1>
        );
      });
    }
    return null;
  }

  render() {
    const { titles, texts, links, sprites } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-sm-6">
        <Row1 className="c">

          <span className={sprites.sprite1}>[sprite]</span>

          <Title1 className="o" data={titles.title1} />

          <Button1 className="g" href={links.link1.href} title={links.link1.title}>
            {links.link1.title}
          </Button1>
        </Row1>
      </div>
      <div className="col-sm-6">
        {this.renderContent(texts)}
      </div>
    </div>);
  }
}

Intro.propTypes = {
  data: React.PropTypes.object.isRequired,
};
