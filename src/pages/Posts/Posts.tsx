import React, { useEffect } from 'react'
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { fetchPosts } from '../../store/reducers/postsSlide'


const Posts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="container">
            <HeaderNavigation />
            <div className="centerXY">
                <ul>
                    {
                        posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Posts