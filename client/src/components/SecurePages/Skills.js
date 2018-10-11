import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'

const Skills = () => (
  <div>
    <Navbar
      imageSrc={"../images/mycompany.png"}
      imageAlt={"My Company Logo"}
      navLinks={["home", "profile", "signout"]}
      signIn={false}
      userName={"Dan"}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-9">
          <h6>Profile > Education</h6>
          <hr />
          <div>
            <h4>Universidad de Buenos Aires</h4>
            <p>Bachelor of Science BS, Biological Sciences / Laboratory Animal Science</p>
            <p>2002 - 2005</p>
            <hr />
          </div>
          <div>
            <h4>University of Pennsylvania</h4>
            <p>Certificate, Full Stack Development</p>
            <p>2018 - 2018</p>
            <br />
            <p>Penn Arts and Sciences Coding Bootcamp - a 24 week full stack web development program.</p>
            <p>Skills learned: HTML, CSS, JavaScript, NodeJS, MySQL, Firebase, Bootstrap, ExpressJS, React.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Skills;