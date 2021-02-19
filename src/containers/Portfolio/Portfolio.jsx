import React, {useState} from 'react';
import Project from "../../components/Project/Project";


const Portfolio = () => {


    return (
        <div className="container">

            <h1 className="text-center">This is my Portfolio page</h1>
            <Project  />
            <Project  />

            
        </div>
    );
    
};

export default Portfolio;