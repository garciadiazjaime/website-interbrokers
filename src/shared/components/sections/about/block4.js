import React from 'react';

import Row1 from '../../elements/rows/row1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Carousel1 from '../../widgets/carousel/carousel1';
import carouselData from './carouselData';

export default class Block4 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-sm-6">
        <Row1 className="c">
          <Paragraph1 className="d2">
            {texts.text1}
          </Paragraph1>
          <Title1 className="b2">
            {texts.text2}
          </Title1>
          <Paragraph1 className="d">
            {texts.text3}
          </Paragraph1>
        </Row1>
      </div>
      <div className="col-sm-6">
        <Carousel1 data={carouselData} />
      </div>
    </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
