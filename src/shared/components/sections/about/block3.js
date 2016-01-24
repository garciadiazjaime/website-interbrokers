import React from 'react';

import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block3 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<Wrapper1 className="r">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <Title1 className="e3">
              {texts.text1}
            </Title1>
            <Paragraph1 className="d2">
              {texts.text2}
            </Paragraph1>
            <Paragraph1 className="c2">
              {texts.text3}
            </Paragraph1>
          </div>
        </div>
      </div>
    </Wrapper1>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
