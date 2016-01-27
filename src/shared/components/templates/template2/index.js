import React from 'react';

import Image1 from '../../elements/images/image1';
import Title1 from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';


export default class Template2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="col-sm-3">
      <Image1 src="" className="" alt="" />
      <Title1 className="m">
        {data.title}
      </Title1>
      <Button1 className="b" href={data.href} title={data.title} />
      <Paragraph1 className="" data={data.description} />
    </div>);
  }
}

Template2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
