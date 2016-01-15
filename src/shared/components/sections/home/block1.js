import React from 'react';

import Button1 from '../../elements/buttons/button1';

export default class BlockA extends React.Component {
  render() {
    return (<div className="container-fluid">
        <div className="row">
          <Button1 className="a" href="http://www.google.com" /><br />
          <Button1 className="b" href="http://www.google.com" /><br />
          <Button1 className="c" href="http://www.google.com" /><br />
          <Button1 className="d" href="http://www.google.com">Enviar</Button1><br />
          <Button1 className="e" href="http://www.google.com">Enviar</Button1><br />
          <Button1 className="f" href="http://www.google.com">Contáctanos</Button1><br />
          <div style={{ background: '#b7b7b7', padding: '50px' }}>
              <Button1 className="h1" href="http://www.google.com">Trámites</Button1><br />
              <Button1 className="h2" href="http://www.google.com">Permits</Button1><br />
              <Button1 className="h3" href="http://www.google.com">Insurance</Button1><br />
              <Button1 className="h4" href="http://www.google.com">Consulting</Button1><br />
          </div>
        </div>
      </div>);
  }
}
