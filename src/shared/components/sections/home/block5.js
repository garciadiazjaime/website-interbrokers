import React from 'react';

import Wrapper1 from '../../elements/wrappers/wrapper1';
import Title1 from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';

export default class Block5 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<Wrapper1 className="f">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <Wrapper1 className="c">
              <Title1 className="e">{texts.text1}</Title1>
              <Title1 className="f">{texts.text2}</Title1>
              <Button1 className="j1" href={links.link1.href} title={links.link1.title}>
                {links.link1.title}
              </Button1>
              <Button1 className="j2" href={links.link2.href} title={links.link2.title}>
                {links.link2.title}
              </Button1>
              <Button1 className="j3" href={links.link3.href} title={links.link3.title}>
                {links.link3.title}
              </Button1>
              <Button1 className="j4" href={links.link4.href} title={links.link4.title}>
                {links.link4.title}
              </Button1>
              <Button1 className="j5" href={links.link5.href} title={links.link5.title}>
                {links.link5.title}
              </Button1>
            </Wrapper1>
          </div>

          <div className="col-xs-12 col-sm-5 col-sm-offset-1">
            <div className="row">
              <div className="col-sm-6">
                <Wrapper1 className="g" />
              </div>
              <div className="col-sm-6">
                <Button1 className="i" href={links.link6.href} title={links.link6.title}>
                  {links.link6.title}
                </Button1>
              </div>
            </div>
            <Paragraph1 className="c">
                {texts.text3}
                <b>{texts.text32}</b>
                {texts.text33}
            </Paragraph1>
          </div>
        </div>
      </div>
      </Wrapper1>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
