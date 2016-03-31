import React, { Component, PropTypes } from 'react'

class Comment extends Component {

    render() {
        const {text} = this.props.comment;
        return (
            <p>
                {text}
            </p>
        )
    }
}

export default Comment
