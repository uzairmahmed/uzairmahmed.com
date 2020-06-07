import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Parallax } from 'react-parallax';

import { baseStyles, bootstrapClasses, theme } from '../styles';

import BaseDiv from '../common/BaseDiv'
import LangCard from '../common/LangCard';
import SkillCard from '../common/SkillCard';

class SkillsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/1.jpg'),

      languages: {
        python: {
          icon: require('../assets/icons/python.png'),
          title: "Python"
        },
        cSharp: {
          icon: require('../assets/icons/csharp.png'),
          title: "C#"
        },
        bash: {
          icon: require('../assets/icons/bash.png'),
          title: "Bash"
        },
      },

      software: {
        reactNative: {
          icon: require('../assets/icons/react.png'),
          title: "React Native",
          text: "Used React Native to create fast, fluid apps for \
Android, iOS, and Web."
        },
        unity: {
          icon: require('../assets/icons/unity.png'),
          title: "Unity",
          text: "Used Unity3D to make 3D Platformers, Apps, AI-Based \
Simulations and Physics Based Simulators",
        },
      }
    }
  }

  render() {
    return (
      <Parallax
        blur={theme.parallax.blur}
        bgImage={this.state.background}
        bgImageAlt={theme.parallax.alt}
        strength={theme.parallax.strength}
        style={theme.parallax.style}
      >
        <BaseDiv
          header="Skills."
          maincontent={
            <div>
              <Tabs defaultActiveKey="software" id="uncontrolled-tab-example">
                <Tab eventKey="languages" title="Languages">
                  <Row>
                    <LangCard item={this.state.languages.python} />
                    <LangCard item={this.state.languages.cSharp} />
                    <LangCard item={this.state.languages.bash} />
                  </Row>
                </Tab>
                <Tab eventKey="software" title="Software">
                  <Row
                    className={bootstrapClasses.rows.skillsCategoryRow}>
                    >
                    <SkillCard item={this.state.software.reactNative} />
                    <SkillCard item={this.state.software.unity} />
                  </Row>
                </Tab>
              </Tabs>
            </div>
          }
        />

      </Parallax>

    );
  }
}

export default SkillsComponent;