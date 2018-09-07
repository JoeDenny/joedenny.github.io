import React, {Component} from "react";
import betwayImg from '../assets/betway.jpg';
import assembleImg from '../assets/assemble.jpg';
import blockchainImg from '../assets/blockchain.jpg';

class Projects extends Component { 
  render() {

    return (
      <section className="tab-content">
        <h1>Past Projects</h1>
        <div className="project-example">
          <div className="left">
            <h2>Assemble App</h2>
            <p>My client needed a job management platform for tradespeople - both a web app and native app. I worked in a team of around 3-5 devs to build the React web app.</p>
            <p><em>"Joe is a true superstar. He helped us build & style our web app using react and rose to every challenge we threw at him. Hire him at once!"</em> - <strong>Michael Leftwich. CEO - Assemble Software LTD</strong></p>
          </div>
          <div className="right">
            <img src={assembleImg} alt="Assemble app" />
          </div>
        </div>
        <div className="project-example">
          <div className="left">
            <h2>Betway</h2>
            <p>Used Agile practices (Scrum) and Test Driven Development techniques to develop websites, landing pages and mobile web apps for Betway’s primary casino and promotion products.</p>
          </div>
          <div className="right">
            <img src={betwayImg} alt="Betway casino website" />
          </div>
        </div>
        <div className="project-example">
          <div className="left">
            <h2>Blockchain Beginners</h2>
            <p>My client needed a simple website for his blockchain startup. I worked with him closely to design the site and ensure it was clean and functional.</p>
            <p><em>"Joe communicated clearly throughout the entire project, and as a result was very effective in the work which he carried out. This meant that the project encountered no major problems, and was completed on time/on budget. He offered great creative input and useful opinions."</em> - <strong>Angus Merrymaid. Founder - Blockchain Beginners</strong></p>
          </div>
          <div className="right">
            <img src={blockchainImg} alt="Blockchain beginners sample" />
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;