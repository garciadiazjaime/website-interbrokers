import React from 'react';

import Button1 from '../../elements/buttons/button1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Form from './form';

export default class Block1 extends React.Component {
  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <div className="col-sm-6 col-xs-12">
          <Title1>
            {texts.text1}
          </Title1>
          <Paragraph1>
            {texts.text2}
            <br />
            <Button1 href={links.link1.href} title={links.link1.title}>
              {links.link1.title}
            </Button1>
          </Paragraph1>

          <Paragraph1>
            <Button1 href={links.link2.href} title={links.link2.title}>
              {links.link2.title}
            </Button1>
          </Paragraph1>

          <Paragraph1>
            <Button1 href={links.link3.href} title={links.link3.title}>
              {links.link3.title}
            </Button1>
          </Paragraph1>

          <Paragraph1>
            <Button1 href={links.link4.href} title={links.link4.title}>
              {links.link4.title}
            </Button1>
          </Paragraph1>
        </div>
        <div className="col-sm-6 col-xs-12">
          <Form />
        </div>
      </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
