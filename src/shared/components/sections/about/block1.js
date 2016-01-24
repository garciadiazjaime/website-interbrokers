import React from 'react';

import Wrapper1 from '../../elements/wrappers/wrapper1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Row1 from '../../elements/rows/row1';

export default class Block1 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<Wrapper1 className="q">
      <div className="container-fluid">
        <Row1 className="e">
          <div className="col-xs-12 col-sm-8">
            <Wrapper1 className="p">
              <Wrapper1 className="o">
                <Title1 className="h">
                  {texts.text1}
                </Title1>
                <div className="row">
                  <div className="col-xs-10 col-sm-7">
                    <Paragraph1 className="d">
                      {texts.text2}
                    </Paragraph1>
                  </div>
                </div>
              </Wrapper1>
            </Wrapper1>
          </div>
        </Row1>
      </div>
      <div className="container-fluid">
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c">
            <Title1 className="a2">
              {texts.text3}
            </Title1>
            <Paragraph1 className="a">
              {texts.text4}
            </Paragraph1>
          </Wrapper1>
        </div>

        <div className="col-xs-12 col-sm-5 col-sm-offset-1">
          <Title1 className="a3">
            {texts.text5}
          </Title1>
        </div>
      </div>
      </Wrapper1>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
