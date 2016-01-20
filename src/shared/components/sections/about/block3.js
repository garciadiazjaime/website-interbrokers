import React from 'react';

import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';

export default class Block3 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className="container-fluid">
      <Title1 className="e3">
        {texts.text1}
      </Title1>
      <Paragraph1 className="d2">
        {texts.text2}
      </Paragraph1>
      <Paragraph1 className="c">
        {texts.text3}
      </Paragraph1>
    </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
