import React from 'react';

import Title from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block3 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Wrapper1 className="c">
              <Title className="b" style={{ position: 'relative' }}>
                {texts.text1}<br />
                {texts.text12}<br />
                {texts.text13}<br />
                {texts.text14}
              </Title>
              <Button1 className="g" href={links.link1.href}>{links.link1.title}</Button1>
            </Wrapper1>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Wrapper1 className="b">
              <Title className="c">{texts.text2}</Title>
              <Paragraph1 className="c">{texts.text3}</Paragraph1>
              <Button1 className="b" href={links.link2.href} />
            </Wrapper1>
          </div>
        </div>
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
