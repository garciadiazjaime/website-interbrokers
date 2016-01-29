import React from 'react';

import Title1 from '../../elements/titles/title1';
import Button1 from '../../elements/buttons/button1';
import Paragraph1 from '../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../elements/wrappers/wrapper1';

// **************** Services > General Menu ******************************
export default class Template2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="col-sm-3">
      <Wrapper1 className={data.className}>
        <Title1 className="m">
          {data.title}
        </Title1>
        <Button1 className="b" href={data.href} title={data.title} />
        <Paragraph1 className="" data={data.description} />
      </Wrapper1>
    </div>);
  }
}

Template2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
