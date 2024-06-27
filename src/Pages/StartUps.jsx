import React from 'react';
import './slider.css';

const StartUps = () => {
    return (
        <div className="content">
          <div className="section" id="wrapperId">
            <section id="startup">
              <h1>STARTUPS</h1>
    
              <div className="wrapper">
                <i id="left" className="fa-solid fas fa-angle-left"></i>
                <ul className="carousel">
                  <li className="card">
                    <div className="img">
                      <img src="img/services/project-2.jpg" alt="" draggable="false" />
                    </div>
                    <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                      <a href="Startups/heartfeltVentures.html">Heartfelt Ventures</a>
                    </h2>
                    <span>Building Dreams, Bridging Realities</span>
                  </li>
                  <li className="card">
                    <div className="img">
                      <img src="img/services/project-1.PNG" alt="" draggable="false" />
                    </div>
                    <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                      <a href="Startups/understandingUnited.html">Understanding United</a>
                    </h2>
                    <span>Together, We Thrive: Understanding United</span>
                  </li>
                  <li className="card">
                    <div className="img">
                      <img src="img/services/project-3.jpg" alt="" draggable="false" />
                    </div>
                    <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                      <a href="Startups/sheSparkInnovations.html">SheSpark Innovations</a>
                    </h2>
                    <span>Empowering Unity, Empowering Tomorrow</span>
                  </li>
                  <li className="card">
                    <div className="img">
                      <img src="img/services/project-4.jpg" alt="" draggable="false" />
                    </div>
                    <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                      <a href="Startups/hopePhoenix.html">Hope Phoenix</a>
                    </h2>
                    <span>Embracing Tomorrow's Promise</span>
                  </li>
                  <li className="card">
                    <div className="img">
                      <img src="img/services/project-5.PNG" alt="" draggable="false" />
                    </div>
                    <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                      <a href="Startups/justBrew.html">Just Brew</a>
                    </h2>
                    <span>Turning Ideas into Impact</span>
                  </li>
                  <li className="card">
                    <div className="img">
                      <img src="img/services/project-6.PNG" alt="" draggable="false" />
                    </div>
                    <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                      <a href="Startups/empowerHer.html">EmpowerHer Co.</a>
                    </h2>
                    <span>Bringing Flavor to Every Bite</span>
                  </li>
                </ul>
                <i id="right" className="fa-solid fas fa-angle-right"></i>
              </div>
            </section>
          </div>
        </div>
      );
};

export default StartUps;