import React, { FormEvent, useState } from 'react'

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation'

import './ShortLink.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchLink } from '../../store/reducers/shortLinkSlice'

function ShortLink() {

    const [inputValue, setInputValue] = useState('')

    const links = useAppSelector(state => state.shortLink)
    const dispatch = useAppDispatch()

    console.log(links)


    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        dispatch(fetchLink(inputValue))
        setInputValue('')
    }

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className="short-container">
                    <form
                        className="short-form"
                        onSubmit={submitHandler}
                    >
                        <div className="short-input-wrapper">
                            <input
                                className='short-input'
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                            />
                            <span
                                className='short-message'
                            >
                                Please add a link
                            </span>

                        </div>
                        <button
                            type='submit'
                            className='short-btn'
                        >
                            Shorten It!
                        </button>
                    </form>

                    {
                        links.map((link, indexLink) => {
                            return (
                                <div className="short-card" key={indexLink}>
                                    <div className="short-initial-link">
                                        {link.result.original_link}
                                    </div>
                                    <div className="short-processed-link">
                                        {link.result.short_link}
                                    </div>
                                    <button
                                        className='short-btn short-btn-sm'
                                    >
                                        Copy
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ShortLink