import React, { useState } from 'react';
import "./Project.css";




const Project = (props) => {


    return (
        <div>

            <div className="card" style={{width: "18rem"}}>

  <img src={props.src} className="card-img-top" alt={props.title}></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.link}>Live Link</a>       <a className="float-right" href={props.github}>GitHub repo</a>
  </div>
</div>


</div>
    );
};

export default Project;