import React from 'react'
import './style.css'

type buttonProps = {
    content: string,
    onClickHandler?: () => void,
}

const Button = ({content, onClickHandler}: buttonProps) => {

    console.log("render button: ", content)

    return (
        <div className="button">
            <button className="button__item" onClick={onClickHandler}>{content}</button>
        </div>
    )
}

export default React.memo( Button )