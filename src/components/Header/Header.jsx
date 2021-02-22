import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Jacquie Gutierrez</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#/contact">Contact</a>
        </li>


<div className="btn-group">
  <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="https://github.com/Jacquie24">GitHub</a></li>
    <li><a className="dropdown-item" href="www.linkedin.com/in/jacquie24">LinkedIn</a></li>
    <li><a className="dropdown-item" href="../../../imgs/resume.pdf">View my resume</a></li>

  </ul>
</div>



      </ul>

    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;