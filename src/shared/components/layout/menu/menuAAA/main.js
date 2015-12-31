'use strict';

import React, { Component, PropTypes} from 'react';
import _ from 'lodash';

import Item from './item';

var style = process.env.NODE_ENV === 'DEV' ? require("./style.scss") : {};
console.log('style', style);

export default class Main extends Component {

  render() {

    return (
      <div className={style.wrapper}>
        <div className="container">
          <nav className="navbar navbar-default" className={style.navbarDefault}>
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-main-menu" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div>
                <div>
                  <i></i>
                </div>
                <a className={"navbar-brand " + style.navbarBrand} href={"tel:" + this.props.tel}>{this.props.tel}</a>
              </div>

            </div>

            <div className="hidden-xs hidden-sm">&nbsp;</div>

            <div className="collapse navbar-collapse" id="bs-navbar-main-menu">
              <ul className="nav navbar-nav">
                {this.getItems(this.props.items)}
              </ul>

              <div className="hidden-xs">
                <div>

                  <div className="row">
                    <div className="col-md-offset-2 col-md-4 col-sm-offset-2 col-sm-4">
                      {/* <ButtonD sprite="FACEBOOK" /> */}
                    </div>
                    <div className="col-md-4 col-sm-4">
                      {/* <ButtonD sprite="OFFICE" /> */}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </nav>
        </div>
      </div>
    );
  }

  getItems(data) {
    return data.map((item, index) => {
      return (<Item url={item.url} key={index}>{item.title}</Item>);
    })
  }
}
