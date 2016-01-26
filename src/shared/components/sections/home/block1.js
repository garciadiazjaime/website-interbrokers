import React from 'react';

export default class Block1 extends React.Component {
  render() {
    const { texts } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <h2><b>{texts.text1}</b></h2>
      <p><b>{texts.text2}</b></p>
      <h2><b>{texts.text3}</b></h2>
      <h2><b>{texts.text4}</b></h2>
      <h2><b>{texts.text5}</b></h2>
    </div>

    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
