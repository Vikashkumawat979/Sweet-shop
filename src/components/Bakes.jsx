import { useState } from "react";
import "./Bakes.css";

const bakes = [
  { name: "Banana Cake", price: 150, image: "/images/banana-cake.png" },
  { name: "Ghee Cake", price: 180, image: "/images/ghee-cake.png" },
  { name: "Jam Roll", price: 160, image: "/images/jam-roll.png" },
  { name: "Cup Cake", price: 245, image: "/images/cup-cake.png" },
  { name: "Chocolate Cake", price: 220, image: "/images/chocolate-cake.png" },
  { name: "Butter Cookies", price: 130, image: "/images/butter-cookies.png" },
  { name: "Pineapple Cake", price: 200, image: "/images/pineapple-cake.png" },
  { name: "Chocolate Muffin", price: 170, image: "/images/chocolate-muffin.png" },
  { name: "Vanilla Cake", price: 190, image: "/images/vanilla-cake.png" },
  { name: "Swiss Roll", price: 175, image: "/images/swiss-roll.png" },
  { name: "Brownie", price: 210, image: "/images/brownie.png" },
  { name: "red-velvet-cake", price: 230, image: "/images/red-velvet-cake.png" },
];

const weights = ["250g", "500g", "750g", "1kg"];

function Bakes({ searchText = "", cart = [], setCart }) {
  const [page, setPage] = useState(1);
  const [selectedWeights, setSelectedWeights] = useState({});
  const [quantities, setQuantities] = useState({});
  const [addedItem, setAddedItem] = useState("");

  const filteredBakes = bakes;

  const pageSize = 4;
  const totalPages = Math.ceil(filteredBakes.length / pageSize);

  const visibleBakes = filteredBakes.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  function changeQuantity(name, amount) {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(1, (prev[name] || 1) + amount),
    }));
  }

  function addToCart(bake) {
    const weight = selectedWeights[bake.name] || "250g";
    const quantity = quantities[bake.name] || 1;

    const weightMultiplier = {
      "250g": 1,
      "500g": 2,
      "750g": 3,
      "1kg": 4,
    };

    const selectedPrice =
      bake.price * (weightMultiplier[weight] || 1);

    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.name === bake.name &&
          item.weight === weight
      );

      if (existing) {
        return prev.map((item) =>
          item.name === bake.name && item.weight === weight
            ? {
              ...item,
              quantity: (item.quantity || 0) + quantity,
            }
            : item
        );
      }

      return [
        ...prev,
        {
          ...bake,
          id: bake.id || bake.name,
          price: selectedPrice,
          weight,
          quantity,
        },
      ];
    });

    setAddedItem(bake.name);

    window.setTimeout(() => {
      setAddedItem("");
    }, 1000);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="bakes-section" id="bakes">
      <h2 className="bakes-title">
        <span>❖</span> Bakes <span>❖</span>
      </h2>

      <div className="bakes-grid">
        {filteredBakes.length === 0 && searchText.trim() !== "" && (
          <p className="no-results">
            No bakes found for "{searchText}"
          </p>
        )}

        {visibleBakes.map((bake) => (
          <article className="bakes-card" key={bake.name}>
            <img
              src={bake.image}
              alt={bake.name}
              className="bakes-image"
              loading="lazy"
            />

            <div className="bakes-content">
              <h3>{bake.name}</h3>
              <p className="bakes-price">₹{bake.price}
                <span> / 250g</span>

              </p>


              <div className="bakes-controls">
                <select
                  aria-label={`Weight for ${bake.name}`}
                  value={selectedWeights[bake.name] || "250g"}
                  onChange={(e) =>
                    setSelectedWeights((prev) => ({
                      ...prev,
                      [bake.name]: e.target.value,
                    }))
                  }
                >
                  {weights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>

                <div className="bakes-quantity">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => changeQuantity(bake.name, -1)}
                  >
                    −
                  </button>

                  <span>{quantities[bake.name] || 1}</span>

                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => changeQuantity(bake.name, 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="bakes-add-btn"
                onClick={() => addToCart(bake)}
              >
                {addedItem === bake.name ? (
                  "Added ✓"
                ) : (
                  <>
                    <i className="fa-solid fa-cart-shopping"></i>
                    Add to cart
                  </>
                )}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="bakes-pagination">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          aria-label="Previous page"
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            type="button"
            key={number}
            className={page === number ? "bakes-page-active" : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <p className="bakes-cart-summary" aria-live="polite">
        Cart: {cartCount} items
      </p>
    </section>
  );
}

export default Bakes;
