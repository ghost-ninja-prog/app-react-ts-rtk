import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchComments } from '../../store/reducers/commentsSlice';
import { deletePost } from '../../store/reducers/postsSlice';
import { IComment } from '../../types/types';
import Comment from '../Comment';

import './styles.css'

interface ICartProps {
    title: string;
    body: string;
    id: number;
}



const Cart = ({ body, id, title }: ICartProps) => {


    const comments: IComment[] = useAppSelector(state => state.comments.comments)
    const dispatch = useAppDispatch()

    const clickBtnDelete = () => {
        dispatch(deletePost(id))
    }

    const clickBtnComments = () => {
        dispatch(fetchComments(id))
    }


    return (
        <div className="cart">
            <div className="cart__btn-delete" onClick={clickBtnDelete}>&times;</div>
            <h4 className="cart__title">{title}</h4>
            <p className="cart__body">{ body }</p>
            <div className='cart__footer'>
                <button className='cart__btn-edit'>Edit</button>
                <button className='cart__btn-comments' onClick={clickBtnComments}>Comments</button>
            </div>
            {
                comments.map(item => {

                    if (item.postId === id) { 
                        return <Comment key={item.id} comment={item} /> 
                    }})
            }
        </div>
    )
}

export default Cart