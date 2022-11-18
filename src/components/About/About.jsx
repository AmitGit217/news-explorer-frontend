import React from "react";
import "./About.css";
import about from "../../images/about_me.jpg";

export default function About() {
    return (
        <section className='about'>
            <img className='about__image' src={about} alt='author' />
            <div className='about__main'>
                <h2 className='about__title'>Amit Bar-Gil</h2>
                <p className='about__info'>
                    Hello World! My name is Amit, and I'm a full stack software
                    developer. This application has been developed with the
                    following technologies:
                    <h3>Back-End: </h3>
                    <ul>
                        <li>Node + Express</li>
                        <li>Jest + Supertest</li>
                        <li>MongoDB</li>
                    </ul>
                    <h3>Front-End:</h3>
                    <ul>
                        <li>React + CSS</li>
                        <li>State management using Context API </li>
                    </ul>
                    The server is up and running on Azure VM with Ubuntu 18.04
                    LTS.
                </p>
                <p className='about__info'>
                    I've been learning for the whole 2022 in the full stack web
                    development bootcamp by Practicum. The course has been
                    intensive but in the right amount, we learned all the topics
                    needed for a developer such as: semantic HTML, responsive
                    user interfaces with css, object-oriented-programming,
                    deployment and working with cloud services.
                </p>
            </div>
        </section>
    );
}
