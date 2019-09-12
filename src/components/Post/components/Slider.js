import React, { Component } from 'react'
import images from './Images';
import { Slide } from 'react-slideshow-image';


export default class Slider extends Component {

    render() {
        const properties = {
            
            arrows: true
        }
        return (
            <Slide {...properties} className="slide">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${images[Math.floor(Math.random() * 9)]})` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${images[Math.floor(Math.random() * 9)]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${images[Math.floor(Math.random() * 9)]})` }}>
                    </div>
                </div>
            </Slide>

        )
    }
}
