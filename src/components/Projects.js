import caterbaseImg from '../assets/caterbase.jpg';
import betwayImg from '../assets/betway.jpg';
import assembleImg from '../assets/assemble.jpg';
import blockchainImg from '../assets/blockchain.jpg';
import fanbytesImg from '../assets/fanbytes.jpg';
import sourceBuffetImg from '../assets/sourcebuffet.jpg';

function Projects() {
  return (
    <div className="content-page">
      <h1>past projects</h1>
      <div className="project-example">
        <div className="left">
          <h2>Caterbase</h2>
          <p>
            Caterbase lets users easily find great catering quotes from the UK's
            most exciting caterers. A tech start-up based in London I co-founded
            in 2017. I personally designed and built the website.
          </p>
          <p className="small">Laravel + Angular</p>
        </div>
        <div className="right">
          <a
            href="https://caterbase.co/#/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={caterbaseImg} alt="Caterbase screenshot" />
          </a>
        </div>
      </div>
      <hr />
      <div className="project-example">
        <div className="left">
          <h2>Source Buffet</h2>
          <p>
            A news aggregator website delivering the latest football (soccer)
            news in real time. The site allows users to create customisable
            dashboards and has a live chat feature.
          </p>
          <p className="small">Laravel + React</p>
          <p className="feedback">
            <em>
              "Joe was a consummate professional throughout his tenure with us
              and I thoroughly enjoyed working with him. His work is of
              excellent quality, and it was evident from the start that he was
              pouring his heart into our project. I would highly recommend him
              for your next project."
            </em>{" "}
            - <strong>Gaurav Sardesai. Founder - Source Buffet</strong>
          </p>
        </div>
        <div className="right">
          <img src={sourceBuffetImg} alt="Source Buffet screenshot" />
        </div>
      </div>
      <hr />
      <div className="project-example">
        <div className="left">
          <h2>Fanbytes</h2>
          <p>
            An advertising platform which helps influencers engage in creative
            ways on social media. Built with Ruby on Rails and React I helped my
            client build new features and improve the sites UI based on designs
            provided by their design team.
          </p>
          <p className="small">Ruby on Rails + React</p>
        </div>
        <div className="right">
          <a
            href="https://fanbytes.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fanbytesImg} alt="Caterbase screenshot" />
          </a>
        </div>
      </div>
      <hr />
      <div className="project-example">
        <div className="left">
          <h2>Assemble App</h2>
          <p>
            Assemble is a Job management platform for tradespeople. My client
            needed help building the frontend of their platform - I worked in a
            team of around 3-5 devs to build the React web app.
          </p>
          <p className="small">Django + React</p>
          <p className="feedback">
            <em>
              "Joe is a true superstar. He helped us build & style our web app
              using react and rose to every challenge we threw at him. Hire him
              at once!"
            </em>{" "}
            - <strong>Michael Leftwich. CEO - Assemble Software LTD</strong>
          </p>
        </div>
        <div className="right">
          <img src={assembleImg} alt="Assemble app" />
        </div>
      </div>
      <hr />
      <div className="project-example">
        <div className="left">
          <h2>Betway - Casino & Promotions apps for Web and Mobile</h2>
          <p>
            Betway is a global online gambling company. We used Agile practices
            (Scrum) and Test Driven Development techniques to develop websites,
            landing pages and mobile web apps for Betway’s primary casino and
            promotion products using AngularJS and React.
          </p>
          <p className="small">.NET + Umbraco + Angular + React</p>
        </div>
        <div className="right">
          <a
            href="https://casino.betway.com/lobby/en/#/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={betwayImg} alt="Betway casino website" />
          </a>
        </div>
      </div>
      <hr />
      <div className="project-example">
        <div className="left">
          <h2>Blockchain Beginners</h2>
          <p>
            My client needed a simple website for his blockchain startup. I
            worked with him closely to design the site and ensure it was clean
            and functional.
          </p>
          <p className="feedback">
            <em>
              "Joe communicated clearly throughout the entire project, and as a
              result was very effective in the work which he carried out. This
              meant that the project encountered no major problems, and was
              completed on time/on budget. He offered great creative input and
              useful opinions."
            </em>{" "}
            - <strong>Angus Merrymaid. Founder - Blockchain Beginners</strong>
          </p>
        </div>
        <div className="right">
          <a
            href="http://blockchainbeg.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blockchainImg} alt="Blockchain beginners sample" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
