import React from 'react';

import ElBuilder from '../../../utils/elementBuilder';


export default class BlockB extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">

        <div className="col-sm-6 col-xs-11">
          <h2>{texts.text1} {texts.text2}</h2>
          <p><b>{texts.text3}</b></p>
          <p>{texts.text4}</p>
          <ElBuilder type="link" data={links.link1} />
        </div>

        <div className="col-sm-6 hidden-xs">
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
