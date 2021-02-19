import React from 'react';
import Project from "../../components/Project/Project";

const projectOne = [
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
]

const Portfolio = () => {
    return (
        <div className="container">

            <h1>This is my Portfolio page</h1>
            <Project {...projectOne[0]} />
            <Project {...projectOne[1]} />
        </div>
    );
};

export default Portfolio;