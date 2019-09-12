import React, { Component } from 'react'

export default class Tag extends Component {
    render() {
        return (
            <label className="tag" style= {{backgroundColor:this.props.tag.classname === 'premium'? '#d1af78': 'black' }}>{this.props.tag.label}</label>
        )
    }
}
