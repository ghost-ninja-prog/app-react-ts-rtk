import React from 'react'
import { useAppDispatch } from '../../hooks/hooks';
import { deletePost } from '../../store/reducers/postsSlide';

import './styles.css'

interface ICartProps {
    title: string;
    body: string;
    id: number;
}



const Cart = ({ body, id, title }: ICartProps) => {

    const dispatch = useAppDispatch()

    const clickBtnDelete = () => {
        dispatch(deletePost(id))
    }


    return (
        <div className="cart">
            <h4 className="cart__title">{title}</h4>
            <p className="cart__body">{ body }</p>
            <div className='cart__footer'>
                <button className='cart__btn-edit'>Edit</button>
                <button className='cart__btn-delete' onClick={clickBtnDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Cart