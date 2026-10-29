
import { useState } from "react";
import "./Savories.css";

const snacks = [
  { name: "Spicy Murukku", price: 180, image: "/images/murukku.png" },
  { name: "Pepper Karachev", price: 140, image: "/images/pepper-karachev.png" },
  { name: "Kadalai Mittai", price: 180, image: "/images/kadalai-mittai.png" },
  { name: "Nendram Chips", price: 200, image: "/images/nendram-chips.png" },
  { name: "Navadhaniyam", price: 310, image: "/images/navadhaniyam.png" },
  { name: "Cashew Fry", price: 550, image: "/images/cashew-fry.png" },
  { name: "Dal Samosa", price: 175, image: "/images/dal-samosa.png" },
  { name: "Thattai", price: 170, image: "/images/thattai.png" },
];

const weights = ["250g", "500g", "750g", "1kg"];

function Savories({ searchText = "", cart = [], setCart }) {
  const [selectedWeights, setSelectedWeights] = useState({});
  const [quantities, setQuantities] = useState({});
  const [addedItem, setAddedItem] = useState("");

  function changeQuantity(name, amount) {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + amount),
    }));
  }

  const addToCart = (snack) => {
    const weight = selectedWeights[snack.name] || "250g";
    const quantity = quantities[snack.name] || 1;

    const weightMultiplier = {
      "250g": 1,
      "500g": 2,
      "750g": 3,
      "1kg": 4,
    };

    const selectedPrice =
      snack.price * (weightMultiplier[weight] || 1);

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.name === snack.name &&
          item.weight === weight
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === snack.name &&
            item.weight === weight
            ? {
              ...item,
              quantity: item.quantity + quantity,
            }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...snack,
          id: snack.id || snack.name,
          price: selectedPrice,
          weight,
          quantity,
        },
      ];
    });
  };

  const filteredSnacks = snacks;

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="savories-section" id="savories">
      <h2 className="savories-title">
        <span>❖</span> Savories <span>❖</span>
      </h2>

      <div className="savories-products">
        {filteredSnacks.length === 0 && searchText.trim() !== "" && (
          <p className="no-results">
            No snacks found for "{searchText}"
          </p>
        )}

        {filteredSnacks.map((snack) => (
          <article className="savories-card" key={snack.name}>
            <img
              className="savories-image"
              src={snack.image}
              alt={snack.name}
              loading="lazy"
            />

            <h3>{snack.name}</h3>
            <p className="savories-price">₹{snack.price}
              <span> / 250g</span>
            </p>

            <div className="savories-controls">
              <select
                aria-label={`Weight for ${snack.name}`}
                value={selectedWeights[snack.name] || "500g"}
                onChange={(e) =>
                  setSelectedWeights((prev) => ({
                    ...prev,
                    [snack.name]: e.target.value,
                  }))
                }
              >
                {weights.map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>

              <div className="savories-quantity">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => changeQuantity(snack.name, -1)}
                >
                  −
                </button>

                <span>{quantities[snack.name] || 1}</span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => changeQuantity(snack.name, 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="savories-add-btn"
              onClick={() => addToCart(snack)}
            >
              {addedItem === snack.name ? (
                "Added ✓"
              ) : (
                <>
                  <i className="fa-solid fa-cart-shopping"></i>
                  Add to cart
                </>
              )}
            </button>
          </article>
        ))}
      </div>

      <p className="savories-cart-summary" aria-live="polite">
        Cart: {cartCount} items
      </p>
    </section>
  );
}

export default Savories;
