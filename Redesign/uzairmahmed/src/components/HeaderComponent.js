import React, { Component } from 'react';
import './styles.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Uzair Ahmed.",
      subtitle: "3rd Year Computer Engineering Student at Ryerson University",
      background: require('../assets/backgrounds/1.jpg')
    }
  }

  render() {
    return (

      <div className="Header">
          <h1 className="HeaderTitle">
            {this.state.title}
          </h1>
          <h4 className="HeaderSubtitle">
            {this.state.subtitle}
          </h4>
      </div>
    );
  }
}