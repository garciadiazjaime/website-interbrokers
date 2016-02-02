import React from 'react';
import { Link } from 'react-router';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class MainMenu extends React.Component {

  getItems(data) {
    return data.map((item, index) => {
      const { url, title } = item;
      const className = style.navbarNavAnchor;
      return (
        <li key={index}>
          <Link to={url} className={className} id={url}>{title}</Link>
        </li>
      );
    });
  }

  getIcons(data) {
    return data.map((item, index) => {
      return (<li key={index}>
          <a href={item.url} className={style[item.title]} id={item.url} target="_blank" />
        </li>
      );
    });
  }

  render() {
    /*eslint-disable */
    return (<nav className={style.navbarDefault + ' navbar navbar-default'}>
            <div className="container-fluid">
              <div className={style.navbarHeader + ' navbar-header'}>
                <button id="mainmenu_trigger" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainmenu" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className={style.navbarBrand + ' navbar-brand'} to="inicio">01.800.788.04.08</Link>
              </div>

              <div className={style.navbarCollapse + ' collapse navbar-collapse'} id='mainmenu'>
                <ul className={style.socialNetwork}>
                  {this.getIcons(this.props.icons)}
                </ul>
                <ul className={style.navbarNav + ' nav navbar-nav'}>
                  {this.getItems(this.props.items)}
                </ul>
              </div>
            </div>
        </nav>);
    /*eslint-enable */
  }
}

MainMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  icons: React.PropTypes.array,
  location: React.PropTypes.any,
};
