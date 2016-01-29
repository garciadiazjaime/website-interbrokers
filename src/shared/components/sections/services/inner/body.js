import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';

import Engine1 from '../../../engines/engine1';
import Template4 from '../../../templates/template4';

export default class Body extends React.Component {

  renderContent(data) {
    const { texts, links } = data;
    let textsEl;
    let linksEl;

    if (_.isArray(texts) && texts.length) {
      textsEl = texts.map((item, index) => {
        return index === 0 ?
        (<Title1 className="q" key={index}>
          {item}
        </Title1>) :
        (<Paragraph1 className="i" key={index}>
          {item}
        </Paragraph1>);
      });
    }

    if (_.isArray(links) && links.length) {
      linksEl = links.map((item, index) => {
        return (<div>
          <Button1 className={item.className} href={item.href} title={item.title} key={index}>
          {item.title}
        </Button1>
      </div>);
      });
    }

    return (<div>
      {textsEl}
      {linksEl}
      </div>);
  }

  renderMenu(data, rootUrl) {
    let itemsEl;
    if (_.isArray(data) && data.length) {
      itemsEl = data.map((item, index) => {
        return (<li key={index}>
            <Button1 href={[rootUrl, item.href].join('/')} title={item.title}>
              {item.title}
            </Button1>
          </li>);
      });
    }
    return (<ul>
        {itemsEl}
      </ul>);
  }

  renderControls() {
    return (<Wrapper1 className="cb">
      <Button1 className="snb1" href="servicios" title="servicios anterior">
        Anterior
      </Button1>

      <Button1 className="snb2" href="servicios" title="servicios siguiente">
        Siguiente
      </Button1>
    </Wrapper1>);
  }

  render() {
    const { data, menuItems, rootUrl } = this.props;
    console.log('rootUrl', rootUrl);
    return (<div className="container-fluid">
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c">
            <Button1 className="stm" href="servicios" title="servicios">
              Menú de Servicios
            </Button1>
            <Engine1 data={menuItems} Template={Template4} />
          </Wrapper1>
        </div>
        <div className="col-xs-12 col-sm-6">
          {this.renderControls()}
          {this.renderContent(data)}
        </div>
      </div>);
  }
}

Body.propTypes = {
  data: React.PropTypes.object.isRequired,
  menuItems: React.PropTypes.array.isRequired,
  rootUrl: React.PropTypes.string.isRequired,
};
