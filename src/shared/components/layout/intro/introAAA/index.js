import React from 'react';

import Title1 from '../../../elements/titles/title1';
import Image1 from '../../../elements/images/image1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';

export default class Intro extends React.Component {

  render() {
    return (<div className="container-fluid">
        <div className="col-sm-8 col-xs-12">
          <Wrapper1 className="j">
            <Image1 className="b" src="/images/logo.png" alt="InterBrokers"/>
          </Wrapper1>
        </div>
        <div className="col-sm-4 col-xs-12 hidden-xs">
          <Wrapper1 className="j">
            <Title1 className="l">Te vemos grande</Title1>
          </Wrapper1>
        </div>
      </div>
    );
  }
}
