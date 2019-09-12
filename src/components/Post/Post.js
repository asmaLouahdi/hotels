import React, { Component } from 'react';
import Slider from './components/Slider';
import StarRatings from 'react-star-ratings';
import Tag from './components/Tag';


export default class Post extends Component {
    render() {
        const stars = parseInt(this.props.rating.replace('*', ''), 10);

        return (
            <div className="post">
                <Slider />
                <div className="top">
                    <label className="country">{this.props.country}</label>
                    <label className="country">&mdash;</label>
                    <label className="place">{this.props.place}</label>
                </div>
                <div className="left">
                    <div className="bottom">
                        <label className="label">{this.props.label}</label>
                        <StarRatings
                            rating={stars}
                            starRatedColor="black"
                            changeRating={this.changeRating}
                            numberOfStars={stars}
                            name='rating'
                            starDimension='20px'
                            starSpacing='3px' />
                    </div>

                    <div className="tags">
                        {this.props.tags.map((tag) => <Tag tag={tag} />)}
                    </div>
                </div>

                <div className="right">
                    <span className="link">
                    &gt;
                    </span>
                </div>
            </div>
        )
    }
}
