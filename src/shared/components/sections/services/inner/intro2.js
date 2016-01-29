import React from 'react';

import Row1 from '../../../elements/rows/row1/';
import Title1 from '../../../elements/titles/title1';
import Button1 from '../../../elements/buttons/button1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';


export default class Intro2 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
      <Row1 className="c">
        <div className="col-sm-6">
          <Title1 className="">
            {texts.text1}
          </Title1>
        </div>
        <div className="col-sm-6">
          [img]
          <Title1 className="">
            {texts.text2}
          </Title1>
          <Paragraph1 className="">
            {texts.text3}
          </Paragraph1>
          <Button1 className="" title={links.link1.title} href={links.link1.href}>
            [borrar text]
          </Button1>
        </div>
      </Row1>
    </div>);
  }
}

Intro2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
