import React from 'react';
import { Link } from 'react-router';

import Title from '../../elements/titles/title1';

export default class Block3 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">
        <div className="col-sm-6">
          <Title className="b">{texts.text1}</Title>
          <Link to={links.link1.href} title={links.link1.title}>{links.link1.title}</Link>
        </div>
        <div className="col-sm-6">
          <Title className="c">{texts.text2}</Title>
          <p>{texts.text3}</p>
          <Link to={links.link2.href} title={links.link2.title}>{links.link2.title}</Link>
        </div>
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
