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
          <div className="row">
            <div className="col-sm-6">
              <Wrapper1 className="a">
                <Title className="a">
                  {texts.text1}
                  <SimpleText className="a">{texts.text2}</SimpleText>
                </Title>
                <Paragraph1 className="b">{texts.text3}</Paragraph1>
                <Paragraph1 className="a">{texts.text4}</Paragraph1>
                <Button1 className="g" refs={links.link1.href}>
                  {links.link1.title}
                </Button1>
              </Wrapper1>
            </div>

            <div className="col-sm-6">
              <div className="row">
                <Image1 className="a" src="/images/home360.png" />
              </div>
            </div>
          </div>
        </Row1>
      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
