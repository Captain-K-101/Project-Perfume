import { useState, useContext, useLayoutEffect } from 'react';
import CartProduct from '../../components/cartProduct/CartProduct';
import { CartContext } from '../../context/cartContext';
import style from './cart.module.css';
import axios from "axios";

const Cart = () => {
  const { cart, totalCost } = useContext(CartContext);
  const [coShown, setCOShown] = useState(false);
  const [dcode, setDcode] = useState(0);
  const [redprice, setredprice] = useState(0);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('noscroll-web');
    document.body.classList.add('trans');
  }, []);

  function handleCheckOut() {
    alert('Checkout - Subtotal : ₹ ' + totalCost);
  }
  const Upd=(e)=>{
    if(e.target.value){
      setDcode(e.target.value)
    }else{
      setDcode(0)
    }
  }
  const Verify=async()=>{
    let data={"token":dcode}
    await axios
      .post(`http://localhost:3000/api/tokens/check`, data)
      .then((res) => {
        if (res.data.data.products[0]?.price) {
            setredprice(totalCost.toFixed(2)-res.data.data.products[0].price);
        }
      });
    console.log(totalCost);
  }

  return (
    <div className={style.page}>
      <div className={style.wrapper}>
        {cart.length > 0 ? (
          <div className={style.items}>
            {cart.map((cartItem) => (
              <CartProduct cartItem={cartItem} key={cartItem.id} />
            ))}
          </div>
        ) : (
          <div className={style.empty}>Cart Empty</div>
        )}
        <div
          className={`${style.checkout} ${coShown ? style.checkout_shown : ''}`}
        >
          <h2>Order Summary</h2>
          <div className={style.total_box}>
            <div className={style.total_box_content}>
              <div className={style.total_item}>
                <div className="text">Bag Total</div>
                <div className="price">{totalCost.toFixed(2)}</div>
              </div>
              <div className={style.total_item}>
                <div className="text">Shipping</div>
                <div className="price">Free</div>
              </div>
              <div className={`${style.total_item} ${style.coupon}`}>
                <div className="text">Discount</div>
                <div className="price">0.00</div>
              </div>
              <div className={`${style.total_item} ${style.coupon}`}>
                Discount Code<input onChange={(e)=>Upd(e)} className="border-2 border-red-500" type="text"/>
                <button onClick={Verify} className="price">Verify</button>
              </div>
              <div className={style.total_item}>
                <div className="text">Total</div>
                <div className="price">{redprice?(<> <del className="text-red-400">{totalCost.toFixed(2)}</del>{"  "+redprice}</>):totalCost.toFixed(2)}</div>
              </div>
            </div>
            <div className={style.checkout_footer}>
              <button onClick={handleCheckOut} disabled={!cart.length}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={(e) => setCOShown(!coShown)}
        className={`${style.toggle_btn} ${coShown ? style.toggle_close : ''}`}
      >
        <span className="material-icons">keyboard_arrow_left</span>
      </button>
    </div>
  );
};

export default Cart;
