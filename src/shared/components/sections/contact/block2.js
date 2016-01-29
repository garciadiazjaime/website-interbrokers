import React from 'react';

import Button1 from '../../elements/buttons/button1';
import Title1 from '../../elements/titles/title1';
import Image1 from '../../elements/images/image1';


export default class Block2 extends React.Component {
  render() {
    const { texts, images, links } = this.props.data;
    return (<div className="container-fluid">
        <Title1>
          {texts.text1}
        </Title1>
        <div className="col-sm-12">
          <Button1 href={links.link1.href} title={links.link1.title}>
            <Image1 className="img-responsive" src={images.image1.src} alt={images.image1.alt} />
          </Button1>
        </div>
      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
