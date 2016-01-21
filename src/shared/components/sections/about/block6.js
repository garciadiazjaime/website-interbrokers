import React from 'react';

import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';

export default class Block6 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-sm-6">
        <Title1 className="j">
          {texts.text1}
        </Title1>
        <Paragraph1 className="a">
          {texts.text2}
        </Paragraph1>
      </div>
    </div>);
  }
}

Block6.propTypes = {
  data: React.PropTypes.object.isRequired,
};
