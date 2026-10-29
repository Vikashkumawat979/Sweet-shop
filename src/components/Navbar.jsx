import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import CartDrawer from "./CartDrawer";

function Navbar({ searchText, setSearchText, cart = [], setCart = () => { }, }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [userOpen, setUserOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "sweets",
        "savories",
        "bakes",
        "contact",
      ];

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className="site-header">
      <nav className="navbar">

        {/* <a href="#home" className="navbar-brand">
          <img src="/Logo.png" alt="Rajshree Sweets Logo" />
          <span className="brand-text">
            <strong>Rajshree</strong>
            <small>Sweets & Bakers</small>
            // <small>----------1999---------</small>
          </span>
        </a> */}

        <a href="/home" className="navbar-brand">
          <img src="/Logo-3.png" alt="Rajshree Sweets Logo" />

        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/sweets">Sweets</NavLink>
          <NavLink to="/savories">Savories</NavLink>
          <NavLink to="/bakes">Bakes</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" 
          className={activeLink === "home" ? "nav-active" : ""}
          onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" 
          className={activeLink === "about" ? "nav-active" : ""}
          onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#sweets"
           className={activeLink === "sweets" ? "nav-active" : ""}
          onClick={() => setMenuOpen(false)}>Sweets</a>
          <a href="#savories" 
          className={activeLink === "savories" ? "nav-active" : ""}
          onClick={() => setMenuOpen(false)}>Savories</a>
          <a href="#bakes"
          className={activeLink === "bakes" ? "nav-active" : ""} 
          onClick={() => setMenuOpen(false)}>Bakes</a>
          <a href="#contact" 
          className={activeLink === "contact" ? "nav-active" : ""}
          onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div> */}

        <div className="navbar-actions">

          <button
            type="buttton"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>


          {/* <button 
            type="button"
            aria-label="Shopping cart"
            onClick={() => setCartOpen(true)}>
            <i className="fa-solid fa-bag-shopping"></i>
          </button> */}

          <button
            type="button"
            className="cart-icon" id="cartToggle" aria-label="Open cart"
            onClick={() => setCartOpen(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="cartCount">
              {cart.reduce(
                (total, item) => total + (item.quantity || 1),
                0
              )}
            </span>
          </button>

          <div className="profile-dropdown-container">
            <button
              type="button"
              className={`user-icon-btn ${userOpen ? "user-active" : ""}`}
              aria-label="Open user menu"
              aria-expanded={userOpen}
              onClick={() => setUserOpen(!userOpen)}
            >
              <i className="fa-regular fa-user"></i>
            </button>

            {userOpen && (
              <div className="user-dropdown">
                {/* Close (X) Button */}
                <button
                  type="button"
                  className="dropdown-close-btn"
                  onClick={() => setUserOpen(false)}
                  aria-label="Close menu"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="user-avatar-circle">
                  <i className="fa-solid fa-user"></i>
                </div>

                <h3 className="dropdown-title">Welcome</h3>
                <p className="dropdown-subtitle">Guest</p>

                <div className="dropdown-divider">
                  <span className="divider-icon">◆</span>
                </div>

                <div className="user-dropdown-actions">
                  <button type="button" className="btn-signin">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <span>Sign In</span>
                  </button>
                  <button type="button" className="btn-create-account">
                    <i className="fa-solid fa-user-plus"></i>
                    <span>Create Account</span>
                  </button>
                </div>
              </div>
            )}
          </div>


          {/* <button aria-label="User">
            <i className="fa-regular fa-user"></i>
          </button> */}
        </div>
        {searchOpen && (
          <div className="navbar-search">
            <input
              type="search"
              placeholder="Search sweets, cakes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />

            <button
              type="button"
              aria-label="Close search"
              onClick={() => {
                setSearchOpen(false);
                setSearchText("");
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}

      </nav>

      <CartDrawer
        cart={cart}
        setCart={setCart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </header>
  );
}

export default Navbar;
