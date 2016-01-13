import React from 'react';
import { Link } from 'react-router';


export default class BlockE extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">

        <div className="col-sm-6">
          <h2>{texts.text1}</h2>
          <p><b>{texts.text2}</b></p>

          <Link to={links.link1.href} title={links.link1.title}>{links.link1.title}</Link>
          <Link to={links.link2.href} title={links.link2.title}>{links.link2.title}</Link>
          <Link to={links.link3.href} title={links.link3.title}>{links.link3.title}</Link>
          <Link to={links.link4.href} title={links.link4.title}>{links.link4.title}</Link>
          <Link to={links.link5.href} title={links.link5.title}>{links.link5.title}</Link>
        </div>

        <div className="col-sm-6">

          <div className="row">
            <div className="col-sm-6">
              [logo]
            </div>
            <div className="col-sm-6">
              <Link to={links.link6.href} title={links.link6.title}>{links.link6.title}</Link>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              {texts.text3}
            </div>
          </div>

        </div>

      </div>);
  }
}

BlockE.propTypes = {
  data: React.PropTypes.object.isRequired,
};
