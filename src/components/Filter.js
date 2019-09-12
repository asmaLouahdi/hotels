import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div id='filter'>
                <i style=
                    {
                        { backgroundColor: 'white', width: 30,  padding: 8, color:'red' }}
                    className="fas fa-list-ul"></i>

                <label id="destinations" >DESTINATIONS</label>
                <span id='arrow'>&or;</span>
            </div>
        )
    }
}
