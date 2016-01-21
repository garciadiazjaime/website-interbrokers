import React from 'react';

import Title1 from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';
import Row1 from '../../elements/rows/row1';

export default class Block8 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<Row1 className="c">
      <div className="container-fluid">
        <div className="col-sm-10">
          <Title1 className="i">
            {texts.text1}
          </Title1>
        </div>
        <div className="col-sm-2">
          <Button1 className="b" href={links.link1.href} title={links.link1.title} />
        </div>
      </div>
    </Row1>);
  }
}

Block8.propTypes = {
  data: React.PropTypes.object.isRequired,
};
