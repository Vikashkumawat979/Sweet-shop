import "./Features.css";

function Features() {
    return (
        <>
            <section className="quality-section">
                <div className="quality-item">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>High Quality</span>
                </div>

                <div className="quality-item">
                    <i className="fa-solid fa-leaf"></i>
                    <span>100% Vegetarian</span>
                </div>

                <div className="quality-item">
                    <i className="fa-solid fa-award"></i>
                    <span>Hygienic</span>
                </div>
            </section>

            <section className="excellence-section">
                <h2>Excellence in Every Morsel</h2>

                <p>
                    Rajshree Sweets brings you delicious,
                    premium-quality Indian sweets made with
                    care, tradition and the finest ingredients.
                </p>
            </section>

            <section className="mithai-banner">
                <img
                    src="/images/mithai-banner.png"
                    alt="Traditional Indian sweets"
                />
            </section>

        </>
    );
}

export default Features;
