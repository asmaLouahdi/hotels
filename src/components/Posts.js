import React, { Component } from 'react'
import Post from './Post/Post.js'
import '../styles/posts.scss';


export default class Posts extends Component {


    render() {
        let key = 0;
        return (
            <div id="posts">
                {this.props.destinations.map(destination =>
                    <Post
                        key={key++}
                        country={destination.country}
                        place={destination.place}
                        label={destination.label}
                        rating={destination.rating}
                        tags={destination.tags} />
                )}
            </div>
        )
    }
}
