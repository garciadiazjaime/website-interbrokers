import React from 'react';

import Button1 from '../../elements/buttons/button1';
import Title1 from '../../elements/titles/title1';
import Image1 from '../../elements/images/image1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

export default class Block2 extends React.Component {
  render() {
    const { texts, images, links } = this.props.data;
    return (<div className="row">
        <div className="col-sm-12">
          <Wrapper1 className="c">
            <Title1 className="t">
              {texts.text1}
            </Title1>
          </Wrapper1>
        </div>
        <Button1 href={links.link1.href} title={links.link1.title}>
          <Image1 className="d" src={images.image1.src} alt={images.image1.alt} />
        </Button1>
      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
