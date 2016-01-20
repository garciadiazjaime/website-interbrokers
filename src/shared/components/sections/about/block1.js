import React from 'react';

import Image1 from '../../elements/images/image1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';

export default class Block1 extends React.Component {

  render() {
    const { texts, images } = this.props.data;
    return (<div className="container-fluid">
      <Image1 className="" src={images.image1.src} alt={images.image1.alt} />
      <Title1 className="h">
        {texts.text1}
      </Title1>
      <Paragraph1 className="d">
        {texts.text2}
      </Paragraph1>
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
