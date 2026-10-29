import { useState, useEffect } from "react";
import "./Sweets.css";

const products = [
    { name: "Ghee Mysorepak", price: 380, image: "/images/mysorepak.png", category: "All Sweets" },
    { name: "Kaju Katli", price: 487, image: "/images/kaju-katli.png", category: "All Sweets" },
    { name: "Coconut Burfi", price: 442, image: "/images/coconut-burfi.png", category: "All Sweets" },
    { name: "Milk Cake", price: 290, image: "/images/milk-cake.png", category: "All Sweets" },
    { name: "Gulab Jamun", price: 220, image: "/images/gulab-jamun.png", category: "Ghee Sweets" },
    { name: "Rasgulla", price: 240, image: "/images/rasgulla.png", category: "Traditional Sweets" },
    { name: "Chandrakala", price: 198, image: "/images/chandrakala.png", category: "Traditional Sweets" },
    { name: "Mothicoor Ladoo", price: 305, image: "/images/mothicoor-ladoo.png", category: "Ghee Sweets" },
    { name: "Besan Ladoo", price: 260, image: "/images/besan-ladoo.png", category: "Ghee Sweets" },
    { name: "Peda", price: 280, image: "/images/peda.png", category: "Traditional Sweets" },
    { name: "Kachori", price: 180, image: "/images/kachori.png", category: "Tea Time Snacks" },
    { name: "Mathri", price: 160, image: "/images/mathri.png", category: "Tea Time Snacks" },
    { name: "Soan Papdi", price: 250, image: "/images/soan-papdi.png", category: "All Sweets" },
    { name: "Kalakand", price: 320, image: "/images/kalakand.png", category: "Traditional Sweets" },
    { name: "Dry Fruit Ladoo", price: 520, image: "/images/dry-fruit-ladoo.png", category: "Ghee Sweets" },
    { name: "Namkeen Mix", price: 150, image: "/images/namkeen.png", category: "Tea Time Snacks" },
    { name: "Crispy Chakli", price: 170, image: "/images/crispy-chakli.jpg", category: "Tea Time Snacks" },
    { name: "Jalebi", price: 240, image: "/images/jalebi.jpg", category: "Ghee Sweets" },
    { name: "Ghewar", price: 300, image: "/images/ghewar.jpg", category: "Ghee Sweets" },
    { name: "Modak", price: 290, image: "/images/modak.jpg", category: "Traditional Sweets" },
    { name: "Black Jamun", price: 240, image: "/images/black-jamun.jpg", category: "Ghee Sweets" },

];

const categories = [
    { name: "All Sweets", count: "80 Products", image: "/images/all-sweets.png" },
    { name: "Ghee Sweets", count: "40 Products", image: "/images/ghee-sweets.jpg" },
    { name: "Traditional Sweets", count: "30 Products", image: "/images/traditional-sweets.png" },
    { name: "Tea Time Snacks", count: "10 Products", image: "/images/tea-snacks.png" },
];

const weights = ["250g", "500g", "750g", "1kg"];

function Sweets({ searchText = "", cart = [], setCart}) {
    const [category, setCategory] = useState("All Sweets");
    const [page, setPage] = useState(1);
    const [selectedWeights, setSelectedWeights] = useState({});
    const [quantities, setQuantities] = useState({});
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        setPage(1);
    }, [searchText, category]);

    useEffect(() => {
        console.log("Sweets cart:", cart);
        console.log("setCart type:", typeof setCart);
    }, [cart, setCart]);

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            category === "All Sweets" || product.category === category;

        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchText.trim().toLowerCase());

        return matchesCategory && matchesSearch;
    });
    // const filteredProducts =
    //     category === "All Sweets"
    //         ? products
    //         : products.filter((product) => product.category === category);

    const pageSize = 8;
    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    const visibleProducts = filteredProducts.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    function changeCategory(name) {
        setCategory(name);
        setPage(1);
    }

    function changeQuantity(name, amount) {
        setQuantities((prev) => ({
            ...prev,
            [name]: Math.max(1, (prev[name] || 1) + amount),
        }));
    }


    function addToCart(product) {
        const weight = selectedWeights[product.name] || "250g";
        const quantity = quantities[product.name] || 1;

        const multiplier = {
            "250g": 1,
            "500g": 2,
            "750g": 3,
            "1kg": 4,
        };

        const newItem = {
            ...product,
            id: product.name,
            weight,
            price: product.price * multiplier[weight],
            quantity,
        };

        // Check whether the product already exists
        const existing = cart.find(
            (item) =>
                item.name === newItem.name &&
                item.weight === newItem.weight
        );

        let updatedCart;

        if (existing) {
            updatedCart = cart.map((item) =>
                item.name === newItem.name && item.weight === newItem.weight
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            updatedCart = [...cart, newItem];
        }

        console.log("OLD CART:", cart);
        console.log("NEW CART:", updatedCart);

        setCart(updatedCart);
    }
    // function addToCart(product) {
    //     const weight = selectedWeights[product.name] || "250g";
    //     const quantity = quantities[product.name] || 1;

    //     setCart((prev) => {
    //         const existing = prev.find(
    //             (item) => item.name === product.name && item.weight === weight
    //         );

    //         if (existing) {
    //             return prev.map((item) =>
    //                 item.name === product.name && item.weight === weight
    //                     ? { ...item, quantity: item.quantity + quantity }
    //                     : item
    //             );
    //         }

    //         return [...prev, { ...product, weight, quantity }];
    //     });
    // }

    return (
        <section className="sweets-section" id="sweets">
            <h2 className="sweets-title">
                <span>❖</span> Sweets <span>❖</span>
            </h2>


            <div className="features">
                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fa-solid fa-truck-fast"></i>
                    </div>
                    <p>National Shipping in 4-6 days</p>
                </div>

                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <p>18 Days Shelf Life</p>
                </div>

                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <p>International Shipping in 6-9 Days</p>
                </div>

                <div className="feature-item">
                    <div className="feature-icon">
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                    <p>No Preservatives</p>
                </div>
            </div>


            <div className="sweet-categories">
                {categories.map((item) => (
                    <button
                        key={item.name}
                        className={`category-card ${category === item.name ? "category-active" : ""
                            }`}
                        onClick={() => changeCategory(item.name)}
                    >
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.count}</p>
                    </button>
                ))}
            </div>

            <div className="sweet-products">


                {visibleProducts.map((product) => (
                    <article className="sweet-card" key={product.name}>
                        <img
                            className="sweet-product-image"
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                        />

                        <div className="sweet-card-content">
                            <h3>{product.name}</h3>
                            <p className="sweet-price">
                                ₹{product.price}
                                <span> / 250g</span>
                            </p>

                            <div className="sweet-controls">
                                <select
                                    aria-label={`Weight for ${product.name}`}
                                    value={selectedWeights[product.name] || "250g"}
                                    onChange={(e) =>
                                        setSelectedWeights((prev) => ({
                                            ...prev,
                                            [product.name]: e.target.value,
                                        }))
                                    }
                                >
                                    {weights.map((weight) => (
                                        <option key={weight} value={weight}>{weight}</option>
                                    ))}
                                </select>

                                <div className="quantity-control">
                                    <button
                                        aria-label="Decrease quantity"
                                        onClick={() => changeQuantity(product.name, -1)}
                                    >−</button>

                                    <span>{quantities[product.name] || 1}</span>

                                    <button
                                        aria-label="Increase quantity"
                                        onClick={() => changeQuantity(product.name, 1)}
                                    >+</button>
                                </div>
                            </div>

                            <button
                                className="add-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                                Add to cart
                            </button>
                        </div>
                    </article>
                ))}

            </div>

            <div className="sweet-pagination">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                >‹</button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                        key={number}
                        className={page === number ? "page-active" : ""}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                >›</button>
            </div>

            <p className="cart-summary" aria-live="polite">
                Cart: {(cart || []).reduce(
                    (sum, item) => sum + (item.quantity || 0),
                    0
                )} items
            </p>

            {/* <p className="cart-summary" aria-live="polite">
                Cart: {cart.reduce((sum, item) => sum + item.quantity, 0)} items
            </p> */}
        </section>
    );
}

export default Sweets;
