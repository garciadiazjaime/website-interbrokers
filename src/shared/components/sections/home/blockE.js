import React from 'react';

import ElBuilder from '../../../utils/elementBuilder';


export default class BlockE extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">

        <div className="col-sm-6">
          <h2>{texts.text1}</h2>
          <p><b>{texts.text2}</b></p>
          <ElBuilder type="link" data={links.link1} />
          <ElBuilder type="link" data={links.link2} />
          <ElBuilder type="link" data={links.link3} />
          <ElBuilder type="link" data={links.link4} />
          <ElBuilder type="link" data={links.link5} />
        </div>

        <div className="col-sm-6">

          <div className="row">
            <div className="col-sm-6">
              [logo]
            </div>
            <div className="col-sm-6">
              <ElBuilder type="link" data={links.link6} />
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
