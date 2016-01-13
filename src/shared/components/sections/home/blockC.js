import React from 'react';

import ElBuilder from '../../../utils/elementBuilder';


export default class BlockC extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="row">
        <div className="col-sm-6">
          <h2>{texts.text1}</h2>
          <ElBuilder type="link" data={links.link1} />
        </div>
        <div className="col-sm-6">
          <h2>{texts.text2}</h2>
          <p>{texts.text3}</p>
          <ElBuilder type="link" data={links.link2} />
        </div>
      </div>);
  }
}

BlockC.propTypes = {
  data: React.PropTypes.object.isRequired,
};
