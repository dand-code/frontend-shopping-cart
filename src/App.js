import Item from './js/Item';
import shirt from './img/shirt.png';
import mug from './img/mug.png';
import cap from './img/cap.png';
import './App.css';
import './css/main.css';

function App() {

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
            <Item product='Shirt' img={shirt} productCode='X7R2OPX' price='20' currency="€" />
            <Item product='Mug' img={mug} productCode='X2G2OPZ' price='5' currency="€" />
            <Item product='Cap' img={cap} productCode='X3W2OPY' price='10' currency="€" />
          </ul>
        </section>
        <aside className="summary">
          <h1 className="main">Order Summary</h1>
          <ul className="summary-items wrapper border">
            <li>
              <span className="summary-items-number">11 Items</span
              ><span className="summary-items-price"
              >120<span className="currency">€</span></span
              >
            </li>
          </ul>
          <div className="summary-discounts wrapper-half border">
            <h2>Discounts</h2>
            <ul>
              <li><span>2x1 Mug offer</span><span>-10€</span></li>
              <li><span>x3 Shirt offer</span><span>-3€</span></li>
              <li><span>Promo code</span><span>0€</span></li>
            </ul>
          </div>
          <div className="summary-total wrapper">
            <ul>
              <li>
                <span className="summary-total-cost">Total cost</span
                ><span className="summary-total-price">107€</span>
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
