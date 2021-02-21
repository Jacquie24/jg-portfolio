import React, { useState } from 'react';
import Project from "../../components/Project/Project";
import Wrapper from '../../Wrapper/Wrapper';
import litPic from "../../imgs/Literate-Listener.png";
import burgerPic from "../../imgs/eat-da-burger-pic.png";
import birdPic from "../../imgs/bird brains cover pic.png";
import empPic from "../../imgs/employee-directory.png";
import BudgetPic from "../../imgs/budget-tracker.png";
import dayPic from "../../imgs/day-planner.png";

const Portfolio = () => {

    const [projects, setProjects] = useState([

        {
            src: litPic,
            title: "Literate Listener",
            description: "Group Project: Search for a book by author or title, find related podcasts and play on the site.",
            link: "https://jacquie24.github.io/Literate-Listener/"

        },

        {
            src: burgerPic,
            title: "Eat Da Burger",
            description: "Solo Project: User can add burger to the list, choose to devour it, or delete the burger.",
            link: "https://shielded-falls-19006.herokuapp.com/"
        },
        {
            src: birdPic,
            title: "Bird Brains",
            description: "Group Project: Bird watching app that allows users to upload photos of sightings and earn points.",
            link: "https://bird-brains.herokuapp.com/"

        },
        {
            src: empPic,
            title: "Employee Directory",
            description: "Solo Project: Table of employees, where users can sort alphabetically or search by name.",
            link: "https://jacquie24.github.io/employee-directory/"
        },
        {
            src: BudgetPic,
            title: "Budget Tracker",
            description: "Solo Project: Users can track Income and Expenditures online and offline",
            link: "https://vast-bayou-13467.herokuapp.com/"

        },
        {
            src: dayPic,
            title: "Day Planner",
            description: "Solo Project: A simple calendar app for scheduling the work day",
            link: "https://jacquie24.github.io/day-planner/"
        }
    ]);



    return (
        <div className="container">

            <h1 className="text-center">Portfolio</h1>
            <Wrapper>
                {projects.map((project, index) => (
                    <Project  {...project} key={index} />
                ))};

</Wrapper>
        </div>
    );

};

export default Portfolio;