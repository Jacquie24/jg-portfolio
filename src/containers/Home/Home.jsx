import React from 'react';
import "./Home.css";
import headshot from "../../imgs/Jacquie head shot.jpg";

const Home = () => {
    return (
        <div>
            <main className="container">
                <section className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <article className="block">
                            <h1 className="block-header">About Me</h1>
                            <hr />
                            <img
                                src={headshot}
                                alt="Jacquie headshot photo"
                                id="about-image"
                            ></img>
                            <p>
                                I am a recent graduate of the Georgia Tech Coding Bootcamp and am
                                excited to launch my career as a web developer. Please check out
                                my portfolio page and contact me if you like what you see.
            </p>
                            <p>
                                Although I am new to web development, I have 25 years’ experience
                                as a small business owner, and I know the value of hard work and
                                adaptability. As a court reporter/realtime captioner, I have had
                                to constantly reinvent myself to keep up with an ever-changing
                                industry. Technologies are constantly evolving, and I learned to
                                quickly adapt and incorporate them into my business plan. This has
                                never been more evident than in the past year when everything
                                shifted online to Zoom, Teams, and WebEx, and I immediately took
                                on captioning into a completely virtual environment and was able
                                to grow my business.
            </p>
                            <br></br>
                            <p>
                                I know what it takes to succeed in a challenging business
                                environment, and I am looking forward to helping you take your
                                business to the next level through web design.
            </p>
                        </article>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Home;