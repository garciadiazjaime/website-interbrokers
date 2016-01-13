import React from 'react';
import { Link } from 'react-router';


export default class BlockB extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">

        <div className="col-sm-6">
          <h2>{texts.text1} {texts.text2}</h2>
          <p><b>{texts.text3}</b></p>
          <p>{texts.text4}</p>
          <Link to={links.link1.href} title={links.link1.title}>{links.link1.title}</Link>
        </div>

        <div className="col-sm-6">
          <div className="row">
            [img]
          </div>
        </div>
      </div>);
  }
}

BlockB.propTypes = {
  data: React.PropTypes.object.isRequired,
};
