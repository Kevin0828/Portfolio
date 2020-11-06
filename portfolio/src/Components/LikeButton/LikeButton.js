import React from 'react';
import 'react-bootstrap';
import './LikeButton.css';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = 
        {
            likes: this.props.cardLikesCount,
            liked: "Like it",
            isLiked : this.props.likedDB,
            cardID: this.props.cardID
        };
    }

    likeClick() {
        if (!(this.state.isLiked)) {
            this.setState({
                likes: this.state.likes + 1,
                isLiked: true,
                liked: "LIKED"
            })
        } 
    }

    render() {
        return (
            <button className={this.state.isLiked ? 'like-button liked' : 'like-button'} 
            disabled={this.state.isLiked} onClick={this.likeClick.bind(this)}>
            <i className={this.state.isLiked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}></i> {this.state.liked} | {this.state.likes}</button>
        );
    }

}

export default LikeButton;