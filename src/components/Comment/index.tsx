import React from "react"
import { IComment } from "../../types/types"

import './styles.css'

type CommentProps = {
    comment: IComment
}

const Comment = ({ comment }: CommentProps) => {
    return (
        <div className="comment__body">
            <div className="comment__name">{ comment.name }</div>
            <div className="comment__text">{ comment.body }</div>
            <span className="comment__email">{ comment.email }</span>
            <hr/>
        </div>
    )
}

export default Comment