import React from 'react';
import Wrapper1 from '../../elements/wrappers/wrapper1';
import Row1 from '../../elements/rows/row1';
import Button1 from '../../elements/buttons/button1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';

export default class Block1 extends React.Component {
  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <Row1 className="b">
          <div className="col-xs-12 col-sm-6">
            <Wrapper1 className="h1">
              <Button1 className="k" href={links.link1.href} title={links.link1.title}>
                <Title1 className="e2">
                  {links.link1.title}
                </Title1>
              </Button1>
            </Wrapper1>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Wrapper1 className="i">
                  <Title1 className="e">
                    {texts.text2}
                  </Title1>
                  <Paragraph1 className="d">
                    {texts.text3}
                  </Paragraph1>
                  <Button1 className="b2" href={links.link2.href} title={links.link2.title}/>
                </Wrapper1>
              </div>
              <div className="col-xs-12 col-sm-6">
                <Wrapper1 className="h2">
                  <Button1 className="l1" href={links.link3.href} title={links.link3.title}>
                    <p>{links.link3.title}</p>
                  </Button1>
                </Wrapper1>
              </div>
              <div className="col-xs-12 col-sm-6">
                <Wrapper1 className="h3">
                  <Button1 className="l2" href={links.link4.href} title={links.link4.title}>
                    <p>{links.link4.title}</p>
                  </Button1>
                </Wrapper1>
              </div>
              <div className="col-xs-12 col-sm-6">
                <Wrapper1 className="h4">
                  <Button1 className="l3" href={links.link5.href} title={links.link5.title}>
                    <p>{links.link5.title}</p>
                  </Button1>
                </Wrapper1>
              </div>
            </div>
          </div>
        </Row1>
      </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
