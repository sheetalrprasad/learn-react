export function About(){
    return ( <div className="about-me container">

        <div className="section-title">
            <h2>About</h2>

            <p>Learn more about me</p>
        </div>

        <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
                {/* <!-- <img src="assets/img/self.JPG" className="img-fluid" alt=""> --> */}
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Software Developer &amp; ML Engineer</h3>
                <p className="fst-italic">
                A Software Engineer having professional experience in business management software development. I focus on back-end development to bring the best of system for a splendid user experience. I’m a detail-oriented person with get-it-done and eager-to-learn spirit. Alongside I'm very interested in Machine Learning. Continuously learning and keen to work in this field. "Passionately curious", is how I'll describe myself.
                </p>
                <div className="row">
                 <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Interests:</strong> <span>Machine Learning</span></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Hobby:</strong> <span>Craft Works</span></li>                
                    <li style={{ cursor: "pointer"}}> <a className="goto" onclick="document.getElementById('skills').scrollIntoView()"><i className="bi bi-chevron-down"></i> <strong>Skills:</strong> <span>...</span></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

    </div>
    );
}


{/* <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
                <!-- <img src="assets/img/self.JPG" className="img-fluid" alt=""> -->
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Software Developer &amp; ML Engineer</h3>
                <p className="fst-italic">
                A Software Engineer having professional experience in business management software development. I focus on back-end development to bring the best of system for a splendid user experience. I’m a detail-oriented person with get-it-done and eager-to-learn spirit. Alongside I'm very interested in Machine Learning. Continuously learning and keen to work in this field. "Passionately curious", is how I'll describe myself.
                </p>
                <div className="row">
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Interests:</strong> <span>Machine Learning</span></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Hobby:</strong> <span>Craft Works</span></li>                
                    <li style="cursor: pointer;"> <a className="goto" onclick="document.getElementById('skills').scrollIntoView()"><i className="bi bi-chevron-down"></i> <strong>Skills:</strong> <span>...</span></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

         <div className="interests container" id="skills">

            <div className="section-title">
                <h2>Skills</h2>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bxl-python" style="color: #ffbb2c;"></i></div>
                    <h3>Python</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                    <div className="icon"><i className="bx bxl-google" style="color: #5578ff;"></i></div>
                    <h3>Golang</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-code-alt" style="color: #e80368;"></i></div>
                    <h3>Java</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-cog" style="color: #e361ff;"></i></div>
                    <h3>Microservices</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-brain" style="color: #47aeff;"></i></div>
                    <h3>Machine Learning</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bxs-data" style="color: #ffa76e;"></i></div>
                    <h3>Cassandra</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-data" style="color: #11dbcf;"></i></div>
                    <h3>PostgreSQL</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bxl-javascript" style="color: #4233ff;"></i></div>
                    <h3>ReactJS</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-link" style="color: #b2904f;"></i></div>
                    <h3>Data Structures</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-shape-polygon" style="color: #b20969;"></i></div>
                    <h3>Algorithms</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-git-repo-forked" style="color: #ff5828;"></i></div>
                    <h3>Git</h3>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                    <div className="icon"><i className="bx bx-chart" style="color: #29cc61;"></i></div>
                    <h3>Data Analysis</h3>
                </div>
                </div>
            </div>
        </div> */}
