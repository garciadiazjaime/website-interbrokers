import React from 'react';
import { Link } from 'react-router';

export default class Block5 extends React.Component {
  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <h2><b>{texts.text1}</b></h2>
    </div>
    <div className="col-sm-6">
      <h2><b>{texts.text2}</b></h2>
      <p>{texts.text3}</p>
      <p><b>{texts.text4}</b></p>
      <Link to={links.link1.href} title={links.link1.title}>{links.link1.title}</Link>
    </div>

    </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
