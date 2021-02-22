import React from 'react';
import "./Contact.css";
import resume from "../../imgs/resume.pdf";

const Contact = () => {
    return (
        <div>
            <main className="container">
                <section className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-8">
                        <form className="block form-horizontal">
                            <h1 className="block-header">Contact Info</h1>
                            <hr></hr>
                            <h3>Jacquie Gutierrez</h3>
                            <h5 className="info-header mt-3">Location:</h5>
                            <p>Hilton Head, SC</p>
                            <h5 className="info-header mt-3"><i class="fa fa-phone-square" aria-hidden="true"></i>  Cellphone:</h5>
                            <p>(310) 617-5984</p>
                            <h5 className="info-header mt-3"><i class="fa fa-envelope" aria-hidden="true"></i>  Email:</h5>
                            <a href="mailto:jgcaption@yahoo.com">jgcaption@yahoo.com</a>
                            <h5 className="info-header mt-3"><i class="fa fa-linkedin-square" aria-hidden="true"></i>  LinkedIn:</h5>
                            <a href="https://www.linkedin.com/in/jacquie24/" target="_blank">www.linkedin.com/in/jacquie24</a>
                            <h5 className="info-header mt-3"><i class="fa fa-file-text-o" aria-hidden="true"></i>  Resume:</h5>
                            <a href={resume} target="_blank">Jacquie Gutierrez PDF</a>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;