import React, { Component } from 'react';

import { baseStyles, skillsStyles, bootstrapClasses, theme } from '../styles'
import Col from 'react-bootstrap/Col';

export default class LangCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>
                {this.props.title} <br />
                <a href={this.props.link}>
                    {this.props.value}
                </a>
            </h2>
        );
    }
}

