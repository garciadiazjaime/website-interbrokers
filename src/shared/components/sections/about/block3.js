import React from 'react';

export default class Block3 extends React.Component {
  render() {
    const { texts } = this.props.data;
    return (<div className="row">

    <div className="col-sm-6">
      <h3><b>{texts.text1}</b></h3>
      <p><b>{texts.text2}</b></p>
      <p>{texts.text3}</p>
    </div>
    </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
