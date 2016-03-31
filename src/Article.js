import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    state = {
        isOpen: false,
    }

    render() {
        const { title, text, comments } = this.props.article;
        const body = this.state.isOpen ? <section>{text}</section> : null;
        const commentsList = this.state.isOpen && comments && comments.length ? <CommentList comments = {comments}/> : null;
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
                {commentsList}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
