import React, { useEffect } from 'react'
import Cart from '../../components/Cart'
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPosts } from '../../store/reducers/postsSlice'
import { IPost } from '../../types/types'

import './styles.css'


const Posts = () => {

    const dispatch = useAppDispatch()
    const loading: null | boolean = useAppSelector(state => state.posts.loading)
    const posts: IPost[] = useAppSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <div className='post-container'>
                    { (posts.length > 0) ? 
                        (
                            posts.map(post => <Cart key={post.id} 
                                                body={post.body}
                                                id={post.id}
                                                title={post.title}
                                            />)
                        ) : ( 
                        (loading === false && posts.length === 0) && <h3>No Posts... </h3>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Posts