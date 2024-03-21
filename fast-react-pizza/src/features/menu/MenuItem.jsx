import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      <Link to={"/order/new"}>{`item ID: ${id}`}</Link>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default MenuItem;
