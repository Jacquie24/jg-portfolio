import React, {useState} from 'react';
import Project from "../../components/Project/Project";


const Portfolio = () => {

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
        <div className="container">

            <h1 className="text-center">This is my Portfolio page</h1>
            {projects.map((project) => (            
            <Project  {...project}/>
            ))};

            
        </div>
    );
    
};

export default Portfolio;