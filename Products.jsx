import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Style/Products.css'

function Products() {
    const [products, setProducts] = useState([])
    const [recommendedIndex, setRecommendedIndex] = useState(0)
    const [limitedOfferIndex, setLimitedOfferIndex] = useState(0)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const result = await axios.get("https://fakestoreapi.com/products");
                setProducts(result.data)
                //console.log(result.data)
            } catch (err) {
                setError(err.message)
            }
        };
        getProducts();
    }, [])

    const recommendedProducts = products.slice(0, Math.ceil(products.length / 2))
    const limitedOfferProducts = products.slice(Math.ceil(products.length / 2))
    const ITEMS_PER_BATCH = 4;
    const getPaginatedProducts = (productsList, currentIndex) =>
        productsList.slice(currentIndex, currentIndex + ITEMS_PER_BATCH);

    const handleNextBatch = (setIndex, currentIndex, productsList) => {
        const newIndex =
            currentIndex + ITEMS_PER_BATCH >= productsList.length
                ? 0
                : currentIndex + ITEMS_PER_BATCH;
        setIndex(newIndex);
    };

    const handlePrevBatch = (setIndex, currentIndex, productsList) => {
        const newIndex =
            currentIndex - ITEMS_PER_BATCH < 0
                ? Math.max(0, productsList.length - ITEMS_PER_BATCH)
                : currentIndex - ITEMS_PER_BATCH;
        setIndex(newIndex);
    };

    return (
        <div className="products-container">
            <h1 className="products-title">Our Products</h1>
            {error && <p className="error-message">Error: {error}</p>}

            <div className="section">
                <h2 className="section-title d-flex justify-content-start fs-4">Recommended Products</h2>
                <div className="carousel">
                    <button
                        className="arrow-button"
                        onClick={() =>
                            handlePrevBatch(setRecommendedIndex, recommendedIndex, recommendedProducts)
                        }
                    >
                        &#8249;
                    </button>
                    <div className="product-line">
                        {getPaginatedProducts(recommendedProducts, recommendedIndex).map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image"
                                />
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        className="arrow-button"
                        onClick={() =>
                            handleNextBatch(setRecommendedIndex, recommendedIndex, recommendedProducts)
                        }
                    >
                        &#8250;
                    </button>
                </div>
            </div>


            <div className="section">
                <h2 className="section-title d-flex justify-content-start fs-4">Limited Offer</h2>
                <div className="carousel">
                    <button
                        className="arrow-button"
                        onClick={() =>
                            handlePrevBatch(setLimitedOfferIndex, limitedOfferIndex, limitedOfferProducts)
                        }
                    >
                        &#8249;
                    </button>
                    <div className="product-line">
                        {getPaginatedProducts(limitedOfferProducts, limitedOfferIndex).map((product) => (
                            <div key={product.id} className="product-card">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image"
                                />
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        className="arrow-button"
                        onClick={() =>
                            handleNextBatch(setLimitedOfferIndex, limitedOfferIndex, limitedOfferProducts)
                        }
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;