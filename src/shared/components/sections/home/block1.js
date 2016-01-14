import React from 'react';

import Button1 from '../../elements/buttons/button1';

export default class BlockA extends React.Component {
  render() {
    return (<div className="row">
        <Button1 className="a" refs="http://www.google.com" /><br />
        <Button1 className="b" refs="http://www.google.com" /><br />
        <Button1 className="c" refs="http://www.google.com" /><br />
        <Button1 className="d" refs="http://www.google.com">Enviar</Button1><br />
        <Button1 className="e" refs="http://www.google.com">Enviar</Button1><br />
        <Button1 className="f" refs="http://www.google.com">Contáctanos</Button1><br />
        <div style={{ background: '#b7b7b7', padding: '50px' }}>
            <Button1 className="h" refs="http://www.google.com">Trámites</Button1><br />
        </div>
      </div>);
  }
}
