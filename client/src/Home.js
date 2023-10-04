import React from 'react';
import { Link } from "react-router-dom";
import Sushi from './img/home-sushi.png'

const Home = () => {
    return (
        <section className="home">
            <nav className="home-nav">
                <div className="home-title">SUSHIRATE</div>
                <Link to="/" className="home-link">Start Rating</Link>
            </nav>
            <div className="home-footer">
                <div className="home-message">Let us in on your<br />favorite rolls</div>
                <img className="home-img" src={Sushi} alt="sushi plate"/>
            </div>
        </section>
    );
};

export default Home;