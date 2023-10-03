/* css */
import "./App.css";
/* js */
import "./javascript/logic.js";
/* images */
import logo from "./images/MY Photo.jpg";
import listIcon from "./images/icon.png";

function App() {
  return (
    <div id="about" className="container">
      {/* nav section */}
      <div className="topnav" id="myTopnav">
        <a href={"#home"} className="active">
          <img src={logo} alt="websiteLogo"></img>
        </a>
        <a href={"#about"}>AboutMe</a>
        <a href={"#skillList"}>skillsList</a>
        <a href={"#contact"}>contactMe</a>
        <a href={"#icon"} className="icon">
          <img className="listIcon" src={listIcon} alt="listIcon" />
        </a>
      </div>
      {/* about me section */}
      <div className="aboutMe">
        <div className="myTextMessage">
          <div className="text">
            <div className="larger">AboutMe</div>
            <div className="large">My Text Message</div>
            <div className="large">Full stack developer</div>
            <div className="small">
              I am Full stack dev with experience in mongoDB , Express(JS) ,
              react(JS) , node(JS)
            </div>
            <div className="small">
              Programming is my life I do programming because i love it enjoy it
              and i motivate me to solve
            </div>
            <div className="small">
              problems whats is the purpose of life the purpose of life is to
              solve lot of problems and i solve
            </div>
            <div className="small">lot of problems everyday.</div>
          </div>
          <div className="img">
            <img src={logo} alt="my Img"></img>
          </div>
        </div>
        <div className="message">
          <div className="larger">Meet Me</div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/I-AcasjacYY?autoplay=1&loop=1"
              allowFullScreen
              title="YouTube Video 1"
            ></iframe>
          </div>
        </div>
      </div>
      {/* skillList section */}
      <div id="skillList" className="skillsList">
        <div className="lable">
          <div className="larger">My skills list</div>
        </div>
        <div className="list">
          <div className="A">
            <div className="large">I do authentication in node.js api's</div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bZpuBVwCOOs?autoplay=1"
                allowFullScreen
                title="YouTube Video 2"
              ></iframe>
            </div>
          </div>
          <div className="B">
            <div className="large">
              I created Chat app that do single and group chat and also make
              friends and remove friend send friend request etc
            </div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UHteAGxfVb8?autoplay=1"
                allowFullScreen
                title="YouTube Video 3"
              ></iframe>
            </div>
          </div>
          <div className="C">
            <div className="large">
              I created the api that downloads the all the youtube channel
              videos from the youtube into our memory
            </div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vpjdbzhSLVs?autoplay=1"
                allowFullScreen
                title="YouTube Video 4"
              ></iframe>
            </div>
          </div>
          <div className="D">
            <div className="large">
              I create this api it get the data from pdf and store data into
              excel and then convert into image according to the data
            </div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sKdSPrS-kMc?autoplay=1"
                allowFullScreen
                title="YouTube Video 5"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* contact section */}
      <div id="contact" className="contactMe">
        <div className="larger">Contact Me</div>
        <div id="inputSection">
          <form id="form">
            <div className="Email">
              Email:
              <input
                id="subject"
                type="text"
                name="Email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="Message">
              Message:<br></br>
              <textarea id="message" />
            </div>
            <div className="submit">SUBMIT</div>
          </form>
        </div>
      </div>
      {/* footer section */}
      <div className="footer">
        <div className="large">
          My Number: 03338636671 (THIS IS ALSO ON WHATSAPP)
        </div>
        <div className="large">My Email: abdulwadoodowner@gmail.com</div>
      </div>
    </div>
  );
}

export default App;
