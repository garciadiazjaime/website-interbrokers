import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';

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
        (<Title1 className="" key={index}>
          {item}
        </Title1>) :
        (<Paragraph1 className="" key={index}>
          {item}
        </Paragraph1>);
      });
    }

    if (_.isArray(links) && links.length) {
      linksEl = links.map((item, index) => {
        return (<Button1 className="" href={item.href} title={item.title} key={index}>
          {item.title}
        </Button1>);
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
    return (<div>
      <Button1 className="" href="servicios" title="servicios anterior">
        Anterior
      </Button1>

      <Button1 className="" href="servicios" title="servicios siguiente">
        Siguiente
      </Button1>
    </div>);
  }

  render() {
    const { data, menuItems, rootUrl } = this.props;
    console.log('rootUrl', rootUrl);
    return (<div className="container-fluid">
        <div className="col-sm-6">
          <Button1 className="" href="servicios" title="servicios">
            Menú de Servicios
          </Button1>
        </div>
        <div className="col-sm-6">
          {this.renderControls()}
        </div>
        <div className="col-sm-6">
          <Engine1 data={menuItems} Template={Template4} />
        </div>
        <div className="col-sm-6">
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
