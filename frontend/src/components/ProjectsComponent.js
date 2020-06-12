import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';

import BaseDiv from '../common/BaseDiv'
import ProjectCard from '../common/ProjectCard'

import { baseStyles, projectStyles, bootstrapClasses, theme } from '../styles/'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';


export default class ProjectsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: require('../assets/backgrounds/5.jpg'),
      projects: {
        stemnotes: {
          title: "StemNotes.",
          location: "UofTHacks - University of Toronto",
          date: "Jan 2020",
          headline: "A notes app designed for engineers and scientists.",
          link: "https://devpost.com/software/stem-notes-c5i7ho",
          img: require('../assets/projects/stemnotes.jpg'),
        },
        trashcode: {
          title: "TrashCode.",
          location: "DeltaHacks - McMaster University",
          date: "Jan 2020",
          headline: "Sorting waste through machine learning.",
          link: "https://devpost.com/software/trash-code",
          img: require('../assets/projects/trashcode.jpg'),
        },
        coronabase: {
          title: "CoronaBase.",
          location: "WinHacks - Windsor University",
          date: "Mar 2020",
          headline: "Fighting COVID-19 by reducing the gap between resource distributers and product manufacturers.",
          link: "https://devpost.com/software/covidbase",
          img: require('../assets/projects/coronabase.jpg'),
        },
        solaro: {
          title: "Solaro.",
          location: "Asterisk EarthxHack - University of Texas",
          date: "Apr 2020",
          headline: "Your roof can help the environment.",
          link: "https://devpost.com/software/saroof",
          img: require('../assets/projects/solaro.png'),
        },
        bookorona: {
          title: "Bookorona.",
          location: "TOHacks - Toronto, ON",
          date: "Apr 2020",
          headline: "Helping people get their groceries quicker during these unfortunate times.",
          link: "https://devpost.com/software/tohacks-project",
          img: require('../assets/projects/bookorona.png'),
        },
        inventoryinvestigator: {
          title: "Inventory Investigator.",
          location: "RUHacks - Ryerson University",
          date: "May 2020",
          headline: "Streamlining the communication between Customers and Stores.",
          link: "https://devpost.com/software/ruhacks2020",
          img: require('../assets/projects/InveInven.png'),
        },
      }
    }
  }

  render() {
    return (
      <Element name="Projects" className="Projects">
        <Parallax
          blur={theme.parallax.blur}
          bgImage={this.state.background}
          bgImageAlt={theme.parallax.alt}
          strength={theme.parallax.strength}
          style={theme.parallax.style}
        >
          <BaseDiv
            header="Projects."
            maincontent={
              <CardDeck
                style={projectStyles.cardDeck}
              >
                <ProjectCard
                  title={this.state.projects.inventoryinvestigator.title}
                  location={this.state.projects.inventoryinvestigator.location}
                  date={this.state.projects.inventoryinvestigator.date}
                  headline={this.state.projects.inventoryinvestigator.headline}
                  link={this.state.projects.inventoryinvestigator.link}
                  img={this.state.projects.inventoryinvestigator.img}
                />
                <ProjectCard
                  title={this.state.projects.bookorona.title}
                  location={this.state.projects.bookorona.location}
                  date={this.state.projects.bookorona.date}
                  headline={this.state.projects.bookorona.headline}
                  link={this.state.projects.bookorona.link}
                  img={this.state.projects.bookorona.img}
                />
                <div class="w-100 d-block"></div>
                <ProjectCard
                  title={this.state.projects.solaro.title}
                  location={this.state.projects.solaro.location}
                  date={this.state.projects.solaro.date}
                  headline={this.state.projects.solaro.headline}
                  link={this.state.projects.solaro.link}
                  img={this.state.projects.solaro.img}
                />
                <ProjectCard
                  title={this.state.projects.coronabase.title}
                  location={this.state.projects.coronabase.location}
                  date={this.state.projects.coronabase.date}
                  headline={this.state.projects.coronabase.headline}
                  link={this.state.projects.coronabase.link}
                  img={this.state.projects.coronabase.img}
                />
                <div class="w-100 d-block"></div>
                <ProjectCard
                  title={this.state.projects.trashcode.title}
                  location={this.state.projects.trashcode.location}
                  date={this.state.projects.trashcode.date}
                  headline={this.state.projects.trashcode.headline}
                  link={this.state.projects.trashcode.link}
                  img={this.state.projects.trashcode.img}
                />
                <ProjectCard
                  title={this.state.projects.stemnotes.title}
                  location={this.state.projects.stemnotes.location}
                  date={this.state.projects.stemnotes.date}
                  headline={this.state.projects.stemnotes.headline}
                  link={this.state.projects.stemnotes.link}
                  img={this.state.projects.stemnotes.img}
                />
                <div class="w-100 d-block"></div>
              </CardDeck>
            }
          />
        </Parallax>
      </Element>
    );
  }
}

