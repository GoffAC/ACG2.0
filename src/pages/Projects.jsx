import React, { Component } from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import Nav from '../imports/Nav';
import ProjectCard from '../imports/ProjectCard';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <div className="mainwrap">
          <Nav lightBackground={true} />
        </div>
        <div className="edgewrap">
        <ProjectCard
          imageLocation="/RAEng.png"
          imageAltText="Me busy at work, in the UCL Department of Science, Technology, Engineering and Public Policy (STEaPP) challenge conference"
          leftOrRight="Right"
          textDescription={
            <p>I am an emerging technology consultant at IBM (think Watson, Cognitive and Blockchain), working to deduce and visualise info from data, reduce complexity and end boring tasks. 
            I have had <a href="fun.com">fun</a> in a weird career so far!  Lead Cardiff Racing to design, build and make the first UK car ever to win Formula Student UK, designed an orthopaedic hospital with Arup and developed an IoT “Fitbit” posture wearable.
            Before graduating I worked for 15 months at DCA, the UK’s best product design consultancy, as a design engineer in medical devices, new trains and FMCG. 
            My spare time focuses on other projects and ideas I have like learning Korean, triathlons, a cognitive start-up called Polly, a tech blog and more. 
            
            TL;DR I like learning and I like challenges
            </p>
            }
        />
        <ProjectCard
          imageLocation="/motiv.jpg"
          imageAltText="a street arrow"
          leftOrRight="left"
          textDescription="Why do what you do?
          I am passionate and enthusiastic about learning; I want to be challenged as that is what is interesting and to be challenged you need to learn new things. 
       Why STEM?
         17 year old me didn’t know anything about engineering; I wanted to be a police man I had it all set out. I almost missed out because I didn’t know about STEM; that shouldn’t happen. It is ubiquitous with modern life and helpful regardless of what you do after. 
       My first fact when I do STEM talks is 
       “If the spelling of engineering was derived more closely from its root word ingenuity, like it is in most other European languages, perhaps more people would have moved into the world of engineering.”
       "
        />
        <ProjectCard
          imageLocation="/IBM.png"
          imageAltText="IBM logo"
          leftOrRight="right"
          textDescription="At IBM I go to companies and show them how new technology can improve their business. I have been immersed in cognitive computation, natural language understanding and data visualisation. At it’s simplest, I understand the want of the client and try to make it possible with the tech I learn or know. 
          I have joined the CbD graduate scheme which is widely known for being brilliant becuase it fits with how I wanted to accelerate my career toward a mixed engineering/technology focus, as opposed to purely mechanical design.
          It has provided me with opportunities outside the typical traditional mechanical engineer. "
        />
        </div>
      </div>
    );
  }
}

export default Projects;
