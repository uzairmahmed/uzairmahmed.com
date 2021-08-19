import React, { Component } from 'react';
import { Element } from 'react-scroll';

import BaseDiv from '../common/BaseDiv'
import ExperienceCard from '../common/ExperienceCard'

import { experienceStyles } from '../styles'
import CardDeck from 'react-bootstrap/CardDeck';


export default class ProjectsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/2.jpg'),
      works: {
        td: {
          img: require('../assets/experience/td.png'),
          tit: "TD Bank",
          loc: "Toronto, ON",
          pos: "Developer Co-op - Delivery Enablement & Transformation",
          dur: "May 2021 - Aug 2021",
          txt: "Technologies Used: React.js, ASP.NET, Microsoft SQL. \n- Developed features and fixed bugs on a pre-existing web application that automates project management while following Agile Methodologies.\n- Added data models, backend functions, and REST API endpoints on an ASP.NET backend to support the application’s databases and Web UIs.\n- Designed UI elements and functionality using React.js and the AntDesign component library."
        },
        tecla: {
          img: require('../assets/experience/rye.png'),
          tit: "Ryerson University Inclusive Media and Design Centre",
          loc: "Toronto, ON",
          pos: "Research Assistant - Tecla Project",
          dur: "Sep 2020 - May 2021",
          txt: "Technologies Used: Arduino, Raspberry Pi, Bluetooth. \n- Developed additional functionality for the Tecla Shield System, to improve assistance for people with limited mobility.\n- Integrated ESP32 and BLE SPI Modules with voice-recognition on the Arduino and Raspberry Pi Platforms."
        },
        ryeai: {
          img: require('../assets/experience/ryeai.png'),
          tit: "Ryerson Artificial Intelligence",
          loc: "Toronto, ON",
          pos: "Director of Computer Vision",
          dur: "Jan 2020 - Present",
          txt: "Technologies Used: Tensorflow, FaceNet, Unity, Arduino, Raspberry Pi, AWS. \n- Leading a team of students in creating a Computer Vision pipeline that converts live images of a chess board for an AI Chess Robot.\n- Led a team of students to generate deepfaked videos to compare DeepFaceLab and FaceSwap.\n- Created a meeting check-in system that uses YOLO Object Detection, Facial Recognition, ReactJS, and an IoT platform to manage in person meeting authentication."
        },
        andie: {
          img: require('../assets/experience/andie.png'),
          tit: "Andie Technologies",
          loc: "Toronto, ON",
          pos: "Full Stack Developer",
          dur: "May 2020 - Sep 2020",
          txt: "Technologies Used: React Native, Expo, Django, MySQL, Firebase, ReactJS, Google Cloud.\n- Developed an accessible, responsive mobile app using React Native and Expo to help users plan grocery trips during pandemic lockdowns.\n- Used Django MySQL database system to store and access data between platforms.\n- Created a dashboard for store booking systems using ReactJS and React Bootstrap."
        },
        l3harris: {
          img: require('../assets/experience/l3harris.png'),
          tit: "L3Harris WESCAM",
          loc: "Burlington, ON",
          pos: "Mission Systems Summer Intern",
          dur: "May 2019 - Sep 2019",
          txt: "Technologies Used: Tensorflow, OpenCV, YOLO, FFMPEG, Docker, Kubernetes.\n- Used Linux Containers in Docker to deploy elastic microservices across multiple servers.\n- Trained a TensorFlow Object Detection Model to identify objects captured by IR cameras.\n- Developed a program to detect objects from live camera feeds and output to web dashboards with Flask."
        }
      }
    }
  }

  render() {
    return (
      <Element name="Experience" className="Experience">
        <BaseDiv
          header="Experience."
          bg={this.state.background}
          maincontent={
            <CardDeck
              style={experienceStyles.cardDeck}
            >
              <ExperienceCard
                img={this.state.works.td.img}
                title={this.state.works.td.tit}
                location={this.state.works.td.loc}
                position={this.state.works.td.pos}
                duration={this.state.works.td.dur}
                text={this.state.works.td.txt}
              />
              <div class="w-100 d-block"></div>
              <ExperienceCard
                img={this.state.works.tecla.img}
                title={this.state.works.tecla.tit}
                location={this.state.works.tecla.loc}
                position={this.state.works.tecla.pos}
                duration={this.state.works.tecla.dur}
                text={this.state.works.tecla.txt}
              />
              <div class="w-100 d-block"></div>
              <ExperienceCard
                img={this.state.works.ryeai.img}
                title={this.state.works.ryeai.tit}
                location={this.state.works.ryeai.loc}
                position={this.state.works.ryeai.pos}
                duration={this.state.works.ryeai.dur}
                text={this.state.works.ryeai.txt}
              />
              <div class="w-100 d-block"></div>
              <ExperienceCard
                img={this.state.works.andie.img}
                title={this.state.works.andie.tit}
                location={this.state.works.andie.loc}
                position={this.state.works.andie.pos}
                duration={this.state.works.andie.dur}
                text={this.state.works.andie.txt}
              />
              <div class="w-100 d-block"></div>
              <ExperienceCard
                img={this.state.works.l3harris.img}
                title={this.state.works.l3harris.tit}
                location={this.state.works.l3harris.loc}
                position={this.state.works.l3harris.pos}
                duration={this.state.works.l3harris.dur}
                text={this.state.works.l3harris.txt}
              />
            </CardDeck>
          }
        />
      </Element>
    );
  }
}

