import React from 'react';

export default class Block4 extends React.Component {
  render() {
    const { texts } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <p><b>{texts.text1}</b></p>
      <h2><b>{texts.text2}</b></h2>
      <p>{texts.text3}</p>
    </div>

    </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
