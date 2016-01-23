import React from 'react';

import Row1 from '../../../elements/rows/row1/';
import Title1 from '../../../elements/titles/title1';
import Button1 from '../../../elements/buttons/button1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';


export default class Intro extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-sm-6">
        <Row1 className="c">

          <Title1 className="o" data={texts.text1} />

          <Button1 className="g" href={links.link1.href}>
            {links.link1.title}
          </Button1>
        </Row1>
      </div>
      <div className="col-sm-6">
        <Paragraph1 className="f1">
          {texts.text2}
        </Paragraph1>
        <Paragraph1 className="f">
          {texts.text3}
        </Paragraph1>
        <Paragraph1 className="f">
          {texts.text4}
        </Paragraph1>
      </div>
    </div>);
  }
}

Intro.propTypes = {
  data: React.PropTypes.object.isRequiered,
};
