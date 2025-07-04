import "./style.css";
import Delete from "../../assets/delete.png";
import Checkout from "../../assets/checkout.png";
import { removeFromCart } from "../../store/actions/movie-list";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function Cart({ handleCartClick }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let total = 0;

  function handleRemove(id) {
    return () => {
      dispatch(removeFromCart(id));
    };
  }

  return (
    <div className="card list">
      {Object.keys(cart).map((key) => {
        const product = cart[key].value;
        const count = cart[key].count;

        const { title, thumbnail, thumbnail_width: amount } = product;
        total += count * amount;
        return (
          <div className="movi-cart" key={thumbnail}>
            <div className="row-x">
              <img src={thumbnail} height="100px" width="60px" />
              <span className="movie-name">{title}</span>
            </div>

            <div className="calu">
              x {count} = {count * amount}
            </div>

            <button onClick={handleRemove(key)} className="btn">
              Remove <img src={Delete} height="22px" />
            </button>
          </div>
        );
      })}

      <h4>Total: {total}</h4>

      <button className="btn">
        Checkout <img height="22px" src={Checkout} />
      </button>
      <button className="btn" onClick={handleCartClick}>
        back <img height="22px" src={Checkout} />
      </button>
    </div>
  );
}

export default Cart;
