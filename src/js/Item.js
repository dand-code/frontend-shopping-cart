import React, { useState } from 'react';
import '../App.css';

function Item(props) {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const currency = props.currency;

    const reduceQuantity = () => {
        if (quantity - 1 >= 0) {
            setQuantity(quantity - 1);
            updateTotal(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        updateTotal(quantity + 1);
    }

    const handleChange = (_event) => { }

    const updateTotal = (qty) => {
        setTotal(qty * props.price);
    }

    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src={props.img} alt="Shirt" />
                    <div className="product-description">
                        <h1>{props.product}</h1>
                        <p className="product-code">Product code {props.productCode}</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count" onClick={reduceQuantity}>-</button>
                <input type="text" className="product-quantity" value={quantity} onChange={handleChange} /><button onClick={incrementQuantity}
                    className="count"
                >+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{props.price}</span>
                <span className="product-currency currency">{currency}</span>
            </div>
            <div className="col-total">
                <span className="product-price">{total}</span>
                <span className="product-currency currency">{currency}</span>
            </div>
        </li>
    );
}

export default Item;
