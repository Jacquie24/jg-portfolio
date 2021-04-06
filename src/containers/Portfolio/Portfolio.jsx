import React, { useState } from 'react';
import Project from "../../components/Project/Project";
import Wrapper from '../../Wrapper/Wrapper';
import litPic from "../../imgs/Literate-Listener.png";
import burgerPic from "../../imgs/eat-da-burger-pic.png";
import birdPic from "../../imgs/bird brains cover pic.png";
import empPic from "../../imgs/employee-directory.png";
import BudgetPic from "../../imgs/budget-tracker.png";
import dayPic from "../../imgs/day-planner.png";
import weatherPic from "../../imgs/weather-dashboard.png";
import spookMe from "../../imgs/Spook-Me-home.png";

const Portfolio = () => {

    const [projects, setProjects] = useState([

        {
            src: litPic,
            title: "Literate Listener",
            description: "Search for a book by author or title and find related podcasts",
            link: "https://jacquie24.github.io/Literate-Listener/",
            github: "https://github.com/Jacquie24/literate-listener"

        },
        {
            src: birdPic,
            title: "Bird Brains",
            description: "Gamified bird watching app: upload photos of sightings and earn points",
            link: "https://bird-brains.herokuapp.com/",
            github: "https://github.com/Jacquie24/bird-brains"

        },

        {
            src: spookMe,
            title: "Spook Me",
            description: "Seek out haunted places in your area or post a haunted sighting of your own",
            link: "https://spook-me.herokuapp.com/",
            github: "https://github.com/Jacquie24/spook-me"
        }

        {
            src: burgerPic,
            title: "Eat Da Burger",
            description: "Add a burger to the list, choose to devour it or delete the burger",
            link: "https://shielded-falls-19006.herokuapp.com/",
            github: "https://github.com/Jacquie24/eat-da-burger"
        },
        {
            src: empPic,
            title: "Employee Directory",
            description: "Table of employees, sort alphabetically or search by name",
            link: "https://jacquie24.github.io/employee-directory/",
            github: "https://github.com/Jacquie24/employee-directory"
        },
        {
            src: BudgetPic,
            title: "Budget Tracker",
            description: "Track Income and Expenditures online and offline",
            link: "https://vast-bayou-13467.herokuapp.com/",
            github: "https://github.com/Jacquie24/budget-tracker"

        },
        {
            src: weatherPic,
            title: "Weather Dashboard",
            description: "Search weather for a given city and receive full forecast",
            link: "https://jacquie24.github.io/weather-dashboard/",
            github: "https://github.com/Jacquie24/weather-dashboard"
        },
        {
            src: dayPic,
            title: "Day Planner",
            description: "A simple calendar app for scheduling the work day",
            link: "https://jacquie24.github.io/day-planner/",
            github: "https://github.com/Jacquie24/day-planner"
        }
    ]);



    return (
        <div className="container">

            <h1 className="text-center" style={{color: "#23395B"}}>Portfolio</h1>
            <Wrapper>
                {projects.map((project, index) => (
                    <Project  {...project} key={index} />
                ))};

</Wrapper>
        </div>
    );

};

export default Portfolio;