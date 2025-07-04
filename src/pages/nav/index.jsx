import "./style.css";
import Cart from "../../assets/cart.png";
import Redux from "../../assets/redx.png";
import ReactPNG from "../../assets/react.webp";
import { useSelector } from "react-redux";

function Nav({ onCartClick }) {
  const cartData = useSelector((state) => state.cart);
  const cartCount = Object.values(cartData || {}).reduce(
    (total, item) => total + item.count,
    0
  );
  console.log(cartData);

  return (
    <div className="nav">
      <div className="nav-dex">
        <span>Anatomy of </span> <img src={Redux} height="22px" /> Redux and RTK
        <img src={ReactPNG} height="22px" />
      </div>

      <button className="img-btn" onClick={onCartClick}>
        <span> Cart {cartCount}</span> <img src={Cart} height="22px" />
      </button>
    </div>
  );
}

export default Nav;
