import React from 'react';

import Image1 from '../../elements/images/image1';
import Title1 from '../../elements/titles/title1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

// **************** About Us > Our Team ******************************
export default class Template1 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="col-xs-12 col-sm-3">
      <Wrapper1 className="v">
        <Image1 src={data.image} alt={data.name} className="c" />
        <Title1 className="k">
          {data.name}
        </Title1>
        <Paragraph1 className="f2">
          {data.role}
        </Paragraph1>
        <Paragraph1 className="f">
          {data.tel}
          <br />
          {data.email}
        </Paragraph1>
      </Wrapper1>
    </div>);
  }
}

Template1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
