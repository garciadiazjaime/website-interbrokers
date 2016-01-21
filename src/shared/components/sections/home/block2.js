import React from 'react';

import Title from '../../elements/titles/title1';
import SimpleText from '../../elements/misc/simpleText';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Button1 from '../../elements/buttons/button1';
import Row1 from '../../elements/rows/row1';
import Image1 from '../../elements/images/image1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block2 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <Row1 className="a">
            <div className="col-sm-6">
              <Wrapper1 className="a">
                <Title className="a">
                  {texts.text1}<br />
                  {texts.text1b}
                  <SimpleText className="a">{texts.text2}</SimpleText>
                </Title>
                <Paragraph1 className="b">{texts.text3}</Paragraph1>
                <Paragraph1 className="a">{texts.text4}</Paragraph1>
                <Button1 className="g" href={links.link1.href} title={links.link1.title}>
                  {links.link1.title}
                </Button1>
              </Wrapper1>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <Image1 className="a" src="/images/home360.png" alt="Servicio Integral 360º"/>
              </div>
            </div>
        </Row1>
      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.string,
  ]),
};
