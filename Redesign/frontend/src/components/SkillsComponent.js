import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab'
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll'

import { baseStyles, skillsStyles, bootstrapClasses, theme } from '../styles';

import BaseDiv from '../common/BaseDiv'
import LangCard from '../common/LangCard';
import SkillCard from '../common/SkillCard';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

class SkillsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/4.jpg'),

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
        js: {
          icon: require('../assets/icons/js.png'),
          title: "JavaScript"
        },
        java: {
          icon: require('../assets/icons/java.png'),
          title: "Java"
        },
        htmlcss: {
          icon: require('../assets/icons/htmlcss.png'),
          title: "HTML/CSS"
        },
        cplusplus: {
          icon: require('../assets/icons/cplusplus.png'),
          title: "C/C++"
        },
        vhdl: {
          icon: require('../assets/icons/vhdl.png'),
          title: "VHDL"
        },
      },

      software: {
        reactNative: {
          icon: require('../assets/icons/react.png'),
          title: "React Native.",
          text: "Used React Native to create fast, fluid apps for Android, iOS, and Web."
        },
        unity: {
          icon: require('../assets/icons/unity.png'),
          title: "Unity.",
          text: "Used Unity3D to make 3D Platformers, Apps, AI-Based Simulations and Physics Based Simulators.",
        },
      },

      hardware: {
        arduino: {
          icon: require('../assets/icons/arduino.png'),
          title: "Arduino.",
          text: "Used Arduino for IoT Devices, Robotic Systems, Wearable Technology, and Serial Communication Devices."
        },
        pi: {
          icon: require('../assets/icons/raspberry.png'),
          title: "Raspberry Pi.",
          text: "Used Raspberry Pi for Machine Learning, Emulation, Web Services, IoT, Robotic Systems, and Smart Home Devices.",
        },
        fpga: {
          icon: require('../assets/icons/fpga.png'),
          title: "FPGA/CPLD.",
          text: "Used Altera FPGAs and CPLDs with Quartus and VHDL to design, program and test low level digital logic circuits.",
        },
      },

      cloud: {
        gcp: {
          icon: require('../assets/icons/gcp.png'),
          title: "Google Cloud.",
          text: "Used Google Cloud Platform for Machine Learning Training, Realtime Databases, Container Deployment, Web Hosting, IoT Devices, and Geolocation."
        },
        docker: {
          icon: require('../assets/icons/docker.png'),
          title: "Docker.",
          text: "Used Docker to create containers to deploy and package microservices to be used on secure systems DockerFile and Docker Compose.",
        },
        aws: {
          icon: require('../assets/icons/aws.png'),
          title: "Amazon Web Services.",
          text: "Used AWS for Container Deployment, IoT Devices, and Database, App Deployment.",
        },
        kube: {
          icon: require('../assets/icons/kubernetes.png'),
          title: "Kubernetes.",
          text: "Used Kubernetes to orchestrate container deployment and deploy linked docker containers to Cloud Services.",
        },
      },

      web: {
        react: {
          icon: require('../assets/icons/react.png'),
          title: "ReactJS.",
          text: "Used React to create static web pages, and dashboards.",
        },
        flask: {
          icon: require('../assets/icons/flask.png'),
          title: "Flask.",
          text: "Used Flask as a backend framework for static web pages and as APIs for Mobile Apps.",
        },
        bootstrap: {
          icon: require('../assets/icons/bootstrap.png'),
          title: "Bootstrap",
          text: "Used Boostrap to create static webpages for use in other frameworks."
        },
        django: {
          icon: require('../assets/icons/django.png'),
          title: "Django.",
          text: "Used Django to setup servers and data models for web apps and APIs for Mobile Apps.",
        },
      },

      concepts: {
        ml: {
          icon: require('../assets/icons/ml.png'),
          title: "Machine Learning.",
          text: "I have done many ML projects using Tensorflow, DarkFlow, and OpenCV. Machine Learning fields include Object Detection, Optical Character Recognition and Natural Language Processing."
        },
        iot: {
          icon: require('../assets/icons/iot.png'),
          title: "Internet of Things.",
          text: "I have done many IOT projects using Arduino, NodeMCU, Raspberry Pi, Google Home, Google Actions and Amazon Alexa.",
        },
        circuits: {
          icon: require('../assets/icons/circuits.png'),
          title: "Circuit Design.",
          text: "I have done many Projects using skills in Circuit Design PCB Design and Fabrication."
        },
        collab: {
          icon: require('../assets/icons/git.png'),
          title: "Collaborative Development.",
          text: "Used Version Control Systems and Software Development Ideologies To Develop Applications Collaboratively and Efficiently."
        },
      },
    }
  }

  render() {
    return (
      <Element name="Skills" className="Skills">
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
                <Tab.Container id="left-tabs-example" defaultActiveKey="languages">
                  <Nav style={skillsStyles.skillsNav}>
                    <Nav.Item>
                      <Nav.Link className="text-white" eventKey="languages">Languages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-white" eventKey="software">Software</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-white" eventKey="hardware">Hardware</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-white" eventKey="cloud">Cloud Technologies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-white" eventKey="web">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="text-white" eventKey="concepts">Concepts</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="languages">
                      <Row
                        className={bootstrapClasses.rows.langsCategoryRow}
                      >
                        <LangCard item={this.state.languages.python} />
                        <LangCard item={this.state.languages.js} />
                        <LangCard item={this.state.languages.bash} />
                        <LangCard item={this.state.languages.java} />
                        <LangCard item={this.state.languages.cSharp} />
                        <LangCard item={this.state.languages.htmlcss} />
                        <LangCard item={this.state.languages.cplusplus} />
                        <LangCard item={this.state.languages.vhdl} />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="software">
                      <Row
                        className={bootstrapClasses.rows.skillsCategoryRow}
                      >
                        <SkillCard item={this.state.software.reactNative} />
                        <SkillCard item={this.state.software.unity} />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="hardware">
                      <Row
                        className={bootstrapClasses.rows.skillsCategoryRow}
                      >
                        <SkillCard item={this.state.hardware.arduino} />
                        <SkillCard item={this.state.hardware.pi} />
                        <SkillCard item={this.state.hardware.fpga} />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cloud">
                      <Row
                        className={bootstrapClasses.rows.skillsCategoryRow}
                      >
                        <SkillCard item={this.state.cloud.gcp} />
                        <SkillCard item={this.state.cloud.docker} />
                        <SkillCard item={this.state.cloud.aws} />
                        <SkillCard item={this.state.cloud.kube} />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="web">
                      <Row
                        className={bootstrapClasses.rows.skillsCategoryRow}
                      >
                        <SkillCard item={this.state.web.react} />
                        <SkillCard item={this.state.web.flask} />
                        <SkillCard item={this.state.web.bootstrap} />
                        <SkillCard item={this.state.web.django} />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="concepts">
                      <Row
                        className={bootstrapClasses.rows.skillsCategoryRow}
                      >
                        <SkillCard item={this.state.concepts.ml} />
                        <SkillCard item={this.state.concepts.circuits} />
                        <SkillCard item={this.state.concepts.iot} />
                        <SkillCard item={this.state.concepts.collab} />
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            }
          />
        </Parallax>
      </Element>

    );
  }
}

export default SkillsComponent;