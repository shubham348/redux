import "./style.css";
import Delete from "../../assets/delete.png";
import Checkout from "../../assets/checkout.png";

function Cart({ handleCartClick }) {
  // const cart = [{ id: 1, title: "1", amount: 100 }];

  const cart = {
    title: "The Grudge",
    year: 2020,
    cast: [
      "Andrea Riseborough",
      "Demián Bichir",
      "John Cho",
      "Betty Gilpin",
      "Lin Shaye",
      "Jacki Weaver",
    ],
    genres: ["Horror", "Supernatural"],
    href: "The_Grudge_(2020_film)",
    extract:
      "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 326,
  };
  const total = 30000;

  function handleRemove(id) {
    return () => {};
  }
  const { key = "1", title, thumbnail, count, thumbnail_width: amount } = cart;

  return (
    <div className="card list">
      <div className="movi-cart" key={thumbnail}>
        <div className="row-x">
          <img src={thumbnail} height="100px" width="60px" />
          <span className="movie-name">{title}</span>
        </div>

        <div className="calu">
          x {cart.count} = {cart.count * amount}
        </div>

        <button onClick={handleRemove(key)} className="btn">
          Remove <img src={Delete} height="22px" />
        </button>
      </div>
      <h4>Total: {total}</h4>

      <button className="btn">
        Checkout <img height="22px" src={Checkout} />
      </button>

      <button className="btn" onClick={handleCartClick}>
        back to list <img height="22px" src={Checkout} />
      </button>
    </div>
  );
}

export default Cart;
