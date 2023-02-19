import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import "./styles.css"

const HeaderNavigation = () => {
    return (
        <>
            <div>
                <div className="header">
                    <div className="header__logo">
                        {/* <img src="media/logo192.png" alt="logo" />        */}
                    </div>

                    <ul className='navigation__menu'>
                        <li className='navigation__item'>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to={`/counter`}>Counter</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to={`/todolist`}>Todo List</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to={`/asynctodolist`}>Async Todo List</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link to={`/posts`}>Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default HeaderNavigation