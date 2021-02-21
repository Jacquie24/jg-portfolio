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
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Info
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="https://github.com/Jacquie24">Visit me on GitHub</a></li>
            <li><a className="dropdown-item" href="www.linkedin.com/in/jacquie24">Visit me on LinkedIn</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="../../../imgs/resume.pdf">View my resume</a></li>
          </ul>
        </li>

      </ul>

    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;