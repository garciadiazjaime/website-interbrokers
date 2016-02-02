import React from 'react';

import Button1 from '../../elements/buttons/button1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';
import Form from './form';

export default class Block1 extends React.Component {
  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">
        <div className="col-sm-6 col-xs-12">
          <Wrapper1 className="c">
            <Title1 className="t">
              {texts.text1}
            </Title1>
            <Paragraph1 className="con">
              {texts.text2}
            </Paragraph1>
        <Button1 href={links.link1.href} title={links.link1.title} className="map" target="_blank">
          {links.link1.title}
        </Button1>
            <Button1 href={links.link2.href} title={links.link2.title} className="con1">
              {links.link2.title}
            </Button1>
            <Button1 href={links.link3.href} title={links.link3.title} className="con2">
              {links.link3.title}
            </Button1>
            <Button1 href={links.link4.href} title={links.link4.title} className="con3">
              {links.link4.title}
            </Button1>
          </Wrapper1>
        </div>
        <div className="col-sm-6 col-xs-12">
          <Wrapper1 className="c">
            <Title1 className="t">
              {texts.text5}
            </Title1>
            <Paragraph1 className="a">
              {texts.text4}
            </Paragraph1>
            <Form />
          </Wrapper1>
        </div>
      </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
