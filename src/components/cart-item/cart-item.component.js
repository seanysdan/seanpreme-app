import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, itemName, quantity, size } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{itemName}</span>
        <span className="size">{size}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
