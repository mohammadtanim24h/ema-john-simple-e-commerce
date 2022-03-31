import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveProduct}) => {
    const {name, img, quantity, price, shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="product" />
            </div>
            <div className='item-details-container'>
                <div className="item-details">
                    <p className="item-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p>Shipping: <span className='orange-color'>${shipping}</span></p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="delete-container">
                    <button  onClick={() => handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;