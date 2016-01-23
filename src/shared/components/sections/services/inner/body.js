import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';

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

  render() {
    const { data, menuItems, rootUrl } = this.props;
    return (<div className="container-fluid">
        <div className="col-sm-6">
          {this.renderMenu(menuItems, rootUrl)}
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
