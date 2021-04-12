import React, { useState } from 'react';
import Item from './js/Item';
import shirt from './img/shirt.png';
import mug from './img/mug.png';
import cap from './img/cap.png';
import './App.css';
import './css/main.css';

function App() {
  const currency = '€';
  const [quantityMug, setQuantityMug] = useState(0);
  const [quantityShirt, setQuantityShirt] = useState(0);
  const [quantityCap, setQuantityCap] = useState(0);
  const [totalMug, setTotalMug] = useState(0);
  const [totalShirt, setTotalShirt] = useState(0);
  const [totalCap, setTotalCap] = useState(0);

  const handleChangeQuantityCap = (inputValue, thePrice) => {
    setQuantityCap(inputValue);
    setTotalCap(inputValue * thePrice);
  }

  const handleChangeQuantityMug = (inputValue, thePrice) => {
    setQuantityMug(inputValue);
    setTotalMug(inputValue * thePrice);
  }

  const handleChangeQuantityShirt = (inputValue, thePrice) => {
    setQuantityShirt(inputValue);
    setTotalShirt(inputValue * thePrice);
  }

  const totalItems = () => {
    return totalMug + totalCap + totalShirt;
  }

  const calculateTotal = () => {
    return totalItems(); //- totalDiscount ();
  }

  return (
    <div id="root">
      <main className="App">
        <section className="products">
          <h1 className="main">Shopping cart</h1>
          <ul className="products-list tableHead">
            <li className="products-list-title row">
              <div className="col-product">Product details</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-price">Price</div>
              <div className="col-total">Total</div>
            </li>
          </ul>
          <ul className="products-list">
            <Item
              product='Shirt'
              img={shirt}
              productCode='X7R2OPX'
              price='20'
              currency={currency}
              quantity={quantityShirt}
              total={totalShirt}
              handleChangeQuantity={handleChangeQuantityShirt}
            />
            <Item
              product='Mug'
              img={mug}
              productCode='X2G2OPZ'
              price='5'
              currency={currency}
              quantity={quantityMug}
              total={totalMug}
              handleChangeQuantity={handleChangeQuantityMug} />
            <Item
              product='Cap'
              img={cap}
              productCode='X3W2OPY'
              price='10'
              currency={currency}
              quantity={quantityCap}
              total={totalCap}
              handleChangeQuantity={handleChangeQuantityCap} />
          </ul>
        </section>
        <aside className="summary">
          <h1 className="main">Order Summary</h1>
          <ul className="summary-items wrapper border">
            <li>
              <span className="summary-items-number">{quantityCap + quantityMug + quantityShirt} Items</span
              ><span className="summary-items-price"
              >{totalItems()}<span className="currency">{currency}</span></span
              >
            </li>
          </ul>
          <div className="summary-discounts wrapper-half border">
            <h2>Discounts</h2>
            <ul>
              <li><span>2x1 Mug offer</span><span>-10{currency}</span></li>
              <li><span>x3 Shirt offer</span><span>-3{currency}</span></li>
              <li><span>Promo code</span><span>0{currency}</span></li>
            </ul>
          </div>
          <div className="summary-total wrapper">
            <ul>
              <li>
                <span className="summary-total-cost">Total cost</span
                ><span className="summary-total-price">{calculateTotal()}{currency}</span>
              </li>
            </ul>
            <button type="submit">Checkout</button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
