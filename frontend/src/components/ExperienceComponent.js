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
        ryeai: {
          img: require('../assets/experience/ryeai.png'),
          tit: "Ryerson Artificial Intelligence",
          loc: "Toronto, ON",
          pos: "Director of Computer Vision",
          dur: "Jan 2020 - Present",
          txt: "Technologies Used: Tensorflow, FaceNet, Python Websockets, Arduino, Raspberry Pi, React, and AWS. \n- (2020-2021) Leading a group of students to create ML Applications of varying difficulty.\n- (2019-2020) Set up a Live Meeting Check-in System on an IoT Platform."
        },
        andie: {
          img: require('../assets/experience/andie.png'),
          tit: "Andie Technologies",
          loc: "Toronto, ON",
          pos: "Full Stack Developer",
          dur: "May 2020 - Sep 2020",
          txt: "Technologies Used: React Native, Expo, Django, MySQL, Firebase, ReactJS, Google Cloud APIs, Microsoft Azure.\n- Developed an accessible, responsive mobile app using React Native and Expo.\n- Helped make a dashboard for store booking systems using ReactJS and React Bootstrap.\n- Used Django MySQL database system to easily store and access data between our platforms."
        },
        l3harris: {
          img: require('../assets/experience/l3harris.png'),
          tit: "L3Harris WESCAM",
          loc: "Burlington, ON",
          pos: "Mission Systems Summer Intern",
          dur: "May 2019 - Sep 2019",
          txt: "Technologies Used: Tensorflow, OpenCV, YOLO, FFMPEG, Docker, Kubernetes.\n- Trained an ML Detection Model to identify objects captured by IR cameras.\n- Developed a program to detect objects from live camera feeds using TensorFlow.\n- Employed the use of Linux Containers in Docker to deploy elastic systems.\n- Developed skills in agile development, critical thinking, leadership, and collaboration."
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

