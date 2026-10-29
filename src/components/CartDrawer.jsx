import "./CartDrawer.css";

function CartDrawer({ cart = [], setCart = () => {}, isOpen, onClose }) {
  const updateQuantity = (item, change) => {
    setCart((prev) =>
      prev
        .map((product) =>
          product.name === item.name && product.weight === item.weight
            ? { ...product, quantity: product.quantity + change }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const removeItem = (item) => {
    setCart((prev) =>
      prev.filter(
        (product) =>
          !(product.name === item.name && product.weight === item.weight)
      )
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0
  );

  const delivery = subtotal === 0 || subtotal >= 500 ? 0 : 40;
  const total = subtotal + delivery;

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>
            <i className="fa-solid fa-bag-shopping"></i> My Cart
          </h2>

          <button className="cart-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <i className="fa-solid fa-basket-shopping"></i>
              <h3>Your cart is empty!</h3>
              <p>Add your favourite sweets to get started.</p>

              <button onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                className="cart-item"
                key={`${item.name}-${item.weight}`}
              >
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.weight}</p>
                  <strong>₹{item.price * item.quantity}</strong>

                  <div className="cart-quantity">
                    <button onClick={() => updateQuantity(item, -1)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => updateQuantity(item, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeItem(item)}
                  aria-label={`Remove ${item.name}`}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="cart-total-row">
              <span>Delivery</span>
              <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
            </div>

            <div className="cart-total-row grand-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout feature coming soon!")}
            >
              Proceed to Checkout
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;