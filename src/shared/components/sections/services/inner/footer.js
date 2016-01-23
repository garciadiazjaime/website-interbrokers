import React from 'react';

import Button1 from '../../../elements/buttons/button1';
import Row1 from '../../../elements/rows/row1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';

export default class Footer extends React.Component {

  render() {
    const { links } = this.props.data;
    return (<Row1 className="c">
      <div className="container-fluid">
        <hr />
        <div className="col-sm-10">
          <Button1 className="b" href={links.link1.href} title={links.link1.title} />
          <Paragraph1 className="g">
            {links.link1.title}
          </Paragraph1>
        </div>
        <div className="col-sm-2">
          <Button1 className="g" href={links.link2.href}>
            {links.link2.title}
          </Button1>
        </div>
      </div>
    </Row1>);
  }
}

Footer.propTypes = {
  data: React.PropTypes.object.isRequired,
};
