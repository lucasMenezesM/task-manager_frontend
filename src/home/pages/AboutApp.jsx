import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import "./AboutApp.css";

export default function AboutApp() {
  return (
    <div className="about-app__container">
      <h2>How did this application was made?</h2>

      <h4>
        This application was developed by me,{" "}
        <span className="underline">Lucas Menezes.</span>
      </h4>

      <img src="/assets/images/about-page-image-1.jpg" alt="about-page" />
      {/* <p>
        To build this application, it was used the MERN STACK. A stack where is
        used 4 main technologies, which I'll talk about bellow{" "}
      </p>

      <p>Each letter, stands for a different technologie...</p>

      <p>M - MongoDB | E - Express | R - React | N - NodeJS</p>

      <p>
        <span className="bold">NodeJS: </span>As a development enviroment, it
        was used NodeJS, where I was able to run javascript codes outside of the
        browser. Thas was the enviroment that allowed me to build the back end
        of this app.
      </p>

      <p>
        <span className="bold">Express: </span>To make easier to build the api
        used for this application, I used Express, which is a framework used in
        NodeJS with the main porpuse for develop API's more easialy.
      </p>

      <p>
        <span className="bold">MongoDB: </span>It's essential that every app has
        it's data base, with SuperTasks, it's not different. To store the users
        and the tasks of each user, it was implemented a Non relational data
        Base, named MongoDB
      </p>

      <p>
        <span className="bold">ReactJS: </span>You are seeing thing interface
        thanks to ReactJS, which is the library that I used to develop the front
        end of this app. It's a very common used library and has a lot of
        flexibility
      </p> */}

      <p>
        To build this application, the MERN STACK was utilized. This stack
        comprises four main technologies, which I'll discuss below.
      </p>

      <p>Each letter stands for a different technology...</p>

      <div className="technologies-list">
        <ul>
          <li>
            M - MongoDB
            <span className="technology-icon">
              <SiMongodb />
            </span>
          </li>
          <li>
            E - Express{" "}
            <span className="technology-icon">
              <SiExpress />
            </span>
          </li>
          <li>
            R - React{" "}
            <span className="technology-icon">
              <FaNodeJs />
            </span>
          </li>
          <li>
            N - NodeJS{" "}
            <span className="technology-icon">
              <FaReact />
            </span>
          </li>
        </ul>
      </div>

      <p>
        <span className="bold">NodeJS: </span>As the development environment,
        NodeJS was employed, allowing the execution of JavaScript code outside
        of the browser. This environment facilitated the creation of the backend
        for this app.
      </p>

      <p>
        <span className="bold">Express: </span>To streamline the development of
        the API used in this application, Express was utilized. It is a
        framework in NodeJS designed to simplify the creation of APIs.
      </p>

      <p>
        <span className="bold">MongoDB: </span>Every app requires a database,
        and SuperTasks is no exception. To store user information and tasks, a
        non-relational database named MongoDB was implemented.
      </p>

      <p>
        <span className="bold">ReactJS: </span>You are currently viewing the
        interface thanks to ReactJS, the library used for developing the
        frontend of this app. It's a widely used library known for its
        flexibility.
      </p>

      <p>
        Here are some links to my <span className="bold">social media</span>
      </p>
      <ul className="social-media">
        <li>
          <a href="https://github.com/lucasMenezesM">Git Hub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucas-menezes-023600279/">
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}
