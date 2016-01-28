import React from 'react';

import Title1 from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';
import Row1 from '../../elements/rows/row1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block8 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<Wrapper1 className="t">
      <div className="container-fluid">
        <Row1 className="g">
          <div className="col-xs-9">
            <Wrapper1 className="c">
              <Title1 className="e4">
                {texts.text1}
              </Title1>
            </Wrapper1>
          </div>
          <div className="col-xs-2">
            <Button1 className="b" href={links.link1.href} title={links.link1.title} />
          </div>
        </Row1>
      </div>
    </Wrapper1>);
  }
}

Block8.propTypes = {
  data: React.PropTypes.object.isRequired,
};
