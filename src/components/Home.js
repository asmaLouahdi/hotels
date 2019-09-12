import React, { Component } from 'react';
import '../styles/home.scss';
import Header from './Header'
import Footer from './Footer'
import Posts from './Posts';
import Filter from './Filter';
import destinations from '../destinations/destinations';

export default class Home extends Component {

    render() {
        return (
            <div id="container">
                <Header />
                <hr></hr>

                <Filter />

                <Posts
                    destinations={destinations.destinations}
                />
                <Footer />
                <hr></hr>
                <div id="banner">
                    <label>Déja membre ?</label>
                    <label>Votre code promo vous attend directement sur le site <a href="https://">en cliquant ici </a></label>
                </div>
                <div id="numbers">
                    <div className="ticket">
                        <span className="number">1</span>
                        <span className="text">
                            <label style={{ display: "block" }}>rejoignez</label>
                            <label className="red">emirates|the list</label>
                        </span>
                    </div>

                    <div className="ticket">
                        <div className="number">2</div>
                        <div className="text">
                            <label style={{ display: "block" }} >recevez par email</label>
                            <label className="red">votre bon de 150 offert</label>
                            <label style={{ display: "block" }}>à utiliser dès 1000 d'achat</label>
                        </div>
                    </div>

                    <div className="ticket">
                        <div className="number">3</div>
                        <div className="text">
                            <label style={{ display: "block" }}>recevez votre séjour</label>
                            <label className="red">avant le 30 avril 2019</label>
                        </div>
                    </div>
                </div>
                <button id="subscribe">je m'inscris</button>
                <div id='flotant'>
                    <label style={{ display: "block" }} >rejoignez <label>emirates | the list</label></label>
                    <label style={{ display: "block" }}>vol + hôtel négociés jusqu'à 70%</label>
                    <hr id="line"></hr>
                </div>


            </div>
        )
    }
}
