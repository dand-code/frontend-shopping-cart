
import '../App.css';

function Item(props) {

    const currency = props.currency;

    const reduce = (ev) => {
        let myInput = document.getElementById(props.productCode);
        myInput = parseInt(myInput.value) - 1;
        props.handleChangeQuantity(myInput, props.price)
    }
    const increment = (ev) => {
        let myInput = document.getElementById(props.productCode);
        myInput = parseInt(myInput.value) + 1;
        props.handleChangeQuantity(myInput, props.price)
    }
    const changeInput = () => { }

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
                <button id='min-btn'
                    className="count"
                    onClick={reduce}>-</button>
                <input id={props.productCode} type="text" className="product-quantity" value={props.quantity} onChange={changeInput} />
                <button
                    onClick={increment}
                    className="count"
                >+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{props.price}</span>
                <span className="product-currency currency">{currency}</span>
            </div>
            <div className="col-total">
                <span className="product-price">{props.total}</span>
                <span className="product-currency currency">{currency}</span>
            </div>
        </li>
    );
}

export default Item;
