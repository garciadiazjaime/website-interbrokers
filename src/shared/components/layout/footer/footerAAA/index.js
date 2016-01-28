import React from 'react';
import { Link } from 'react-router';

import Wrapper1 from '../../../elements/wrappers/wrapper1';
import Image1 from '../../../elements/images/image1';
import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';

export default class FooterAAA extends React.Component {

  getMenu(data) {
    const items = data.map((item, index) => {
      const children = item.children ? this.getMenu(item.children) : null;

      return (<li key={index}>
        {
          item.type ?
          <a href={item.url} target="_blank">{item.title}</a> :
          <Link to={item.url}>{item.title}</Link>
        }
        {children}
      </li>);
    }, this);

    return (<ul>{items}</ul>);
  }

  getAddress(data) {
    const items = data.map((item, index) => {
      return (<div className="col-xs-12 col-sm-3" key={index}>
        <Wrapper1 className="l">
          <Title1 className="m">
            {item.id}
          </Title1>
          <Paragraph1 className="e">
            {item.address}<br />
            {item.address2}<br />
            {item.address3}<br />
          </Paragraph1>
          <Title1 className="n">
            {item.cta}
          </Title1>
          <div className="hidden-xs">
            <Title1 className="e">
              {item.phone}
            </Title1>
          </div>
          <div className="visible-xs">
            <Button1 className="n" href={ 'tel:' + item.phone } title={ item.phone }>
              {item.phone}
            </Button1>
          </div>
        </Wrapper1>
      </div>);
    });

    return (<div>{items}</div>);
  }

  render() {
    const { addresses } = this.props;
    const data = [{
      name: 'POOL',
      url: 'http://somospool.com',
      title: 'somos pool',
    }, {
      name: 'MINT',
      url: 'http://mintitmedia.com',
      title: 'Diseño y Desarrollo Web en Tijuana',
    }];

    return (<Wrapper1 className="k">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                  <Image1 className="d" src="/images/logoWhite.png" alt="InterBrokers"/>
              </div>
              <div className="col-xs-12 col-sm-4">
                <Button1 className="p" href="https://www.facebook.com/InterbrokersSeguros/" title="InterBrokers en Facebook">
                  Síguenos en Facebook
                </Button1>
              </div>
            </div>
            <div className="row">
                {this.getAddress(addresses)}
              <div className="col-xs-12 col-sm-6">
                <Title1 className="m">
                  Servicios
                </Title1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Trámites en Estados Unidos para Transportistas
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Trámites en México para Transportistas
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Trámite de Placas en DMV - Estados Unidos
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Trámite de Placas en  SCT - México
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Permisos para Transportistas en Estados Unidos
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Permisos y Servicios para Nuevos Entrantes
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Seguros para Vehículos Comerciales en Estados Unidos
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Seguros para Vehículos Comerciales en México
                </Button1>
                <Button1 className="o" href="http://www.google.com" title="Servicios Integrales">
                  Consultoría y Servicio de Auditorias para Empresas Transportistas
                </Button1>
              </div>
            </div>
          </div>
          <Wrapper1 className="m">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    Todos los derechos reservados &copy; InterBrokers
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <Wrapper1 className="n">
                      Un proyecto de:&nbsp;
                      <a href={data[0].url} title={data[0].title} target="_blank">{data[0].name}</a>
                      &nbsp;&nbsp;
                      Código por:&nbsp;
                      <a href={data[1].url} title={data[1].title} target="_blank">{data[1].name}</a>
                    </Wrapper1>
                  </div>
                </div>
              </div>
          </Wrapper1>
        </Wrapper1>);
  }
}

FooterAAA.propTypes = {
  items: React.PropTypes.array.isRequired,
  addresses: React.PropTypes.array,
};
