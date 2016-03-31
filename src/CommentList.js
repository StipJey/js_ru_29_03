import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    state = {
        isOpenComments: false,
    };

    render() {
        return (
            <div>
                <a onClick = {this.handleClick}>
                    {this.state.isOpenComments ? 'Закрыть' : 'Открыть'} комменты</a>
                <ul>
                    { this.state.isOpenComments ? this.getCommentList() : null }
                </ul>
            </div>
        )
    }

    getCommentList() {
        if (!this.props.comments){
            return null;
        }
        return this.props.comments.map((comment, index) =>
            <li key={comment.id}><Comment comment = {comment} /></li>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        })
    }
}

export default CommentList
