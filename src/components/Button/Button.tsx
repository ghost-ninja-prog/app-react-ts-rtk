import React from 'react'
import './style.css'

type buttonProps = {
    content: string,
    onClickHandler?: () => void,

}

const Button = ({content, onClickHandler}: buttonProps) => {
    return (
        <div className="button">
            <button className="button__item" onClick={onClickHandler}>{content}</button>
        </div>
    )
}

export default Button