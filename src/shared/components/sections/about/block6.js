import React from 'react';

import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block6 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<Wrapper1 className="s">
      <div className="container-fluid">
        <div className="col-sm-6">
          <Wrapper1 className="c">
            <Title1 className="a2">
              {texts.text1}
            </Title1>
            <Paragraph1 className="a">
              {texts.text2}
            </Paragraph1>
          </Wrapper1>
        </div>
      </div>
      </Wrapper1>);
  }
}

Block6.propTypes = {
  data: React.PropTypes.object.isRequired,
};
