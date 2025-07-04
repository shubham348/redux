import { useSelector } from "react-redux";
import AddToCart from "../../assets/add.png";
import "./style.css";

function List({ onCartClick }) {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="movie-list">
      {!!movies &&
        movies?.map((movie) => {
          const { title, discount, thumbnail_width, thumbnail } = movie;

          return (
            <div className="movie-card" key={thumbnail}>
              <img width="140px" height="170px" src={thumbnail} />
              <span>{title}</span>
              <div className="cart-btn">
                <button className="cart-srap" onClick={() => {}}>
                  <span> Add to Cart</span>{" "}
                  <img src={AddToCart} height="22px" />
                </button>
              </div>
              {!!discount && <span>"This is free"</span>}
              <span>INR {thumbnail_width}</span>
            </div>
          );
        })}
    </div>
  );
}

export default List;
