import React from 'react';
import { Link } from 'react-router';


export default class BlockC extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">
        <div className="col-sm-6">
          <h2>{texts.text1}</h2>
          <Link to={links.link1.href} title={links.link1.title}>{links.link1.title}</Link>
        </div>
        <div className="col-sm-6">
          <h2>{texts.text2}</h2>
          <p>{texts.text3}</p>
          <Link to={links.link2.href} title={links.link2.title}>{links.link2.title}</Link>
        </div>
      </div>);
  }
}

BlockC.propTypes = {
  data: React.PropTypes.object.isRequired,
};
