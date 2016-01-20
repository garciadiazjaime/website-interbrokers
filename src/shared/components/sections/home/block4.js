import React from 'react';

import Button1 from '../../elements/buttons/button1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block4 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <Wrapper1 className="d">
              <Title1 className="d">{texts.text1}</Title1>
              <Paragraph1 className="c">{texts.text2}</Paragraph1>
              <Button1 href={links.link1.href} className="b" title={links.link1.title}/>
            </Wrapper1>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12">
            <Wrapper1 className="e">
              <Title1 className="b">
                {texts.text3}<br />
                {texts.text32}<br />
                {texts.text33}
              </Title1>
              <Button1 href={links.link2.href} className="g"title={links.link2.title}>
                {links.link2.title}
              </Button1>
            </Wrapper1>
          </div>
        </div>
      </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
