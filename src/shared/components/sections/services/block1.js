import React from 'react';

import Row1 from '../../elements/rows/row1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block1 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className="container-fluid">
      <Row1 className="c3">
        <div className="col-xs-12 col-sm-10">
          <Wrapper1 className="c">
            <Title1 className="i2">
              {texts.text1}
            </Title1>
            <Title1 className="h">
              {texts.text2}
            </Title1>
          </Wrapper1>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c">
            <Paragraph1 className="d">
              {texts.text3}
            </Paragraph1>
          </Wrapper1>
        </div>
        <div className="clearfix"></div>
      </Row1>
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
