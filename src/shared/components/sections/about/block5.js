import React from 'react';

import Row1 from '../../elements/rows/row1';
import Image1 from '../../elements/images/image1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Button1 from '../../elements/buttons/button1';


export default class Block5 extends React.Component {

  render() {
    const { texts, images, links } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-sm-6">
        <Image1 className="" src={images.image1.src} alt={images.image1.alt} />
        <Title1 className="b2">
          {texts.text1}
        </Title1>
      </div>
      <div className="col-sm-6">
        <Row1 className="c">
          <Title1 className="b2">
            {texts.text2}
          </Title1>
          <Paragraph1 className="d" data={texts.text3} />
          <Button1 className="g" href={links.link1.href} title={links.link1.title}>
            {links.link1.title}
          </Button1>
        </Row1>
      </div>
    </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
