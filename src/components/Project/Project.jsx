import React, { useState } from 'react';




const Project = () => {

    const [projects, setProjects] = useState([
        {
            image: "http://placekitten.com/g/200/300",
            title: "Kitten project",
            description: "This is my best kitty",
            link: "https://www.github.com"
    
    },
    {
        image: "http://placekitten.com/g/200/300",
            title: "Dog project",
            description: "This is my best puppy",
            link: "https://www.google.com"
    }
    ]);

    return (
        <div>
                            {projects.map((project) => (
            <div className="card" style={{width: "18rem"}}>

  <img src={project.image} className="card-img-top" alt={project.title}></img>
  <div className="card-body">
    <h5 className="card-title">{project.title}</h5>
    <p className="card-text">{project.description}</p>
    <a href={project.link}>Go somewhere</a>
  </div>
</div>
  ))};

</div>
    );
};

export default Project;