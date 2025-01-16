import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
    const Images = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/AugART25/2nd/r2/TCL_55_PC_Her333o_3000x1200_Lifestyle._CB552871208_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Camera/Trueview/PC_Hero_3000x1200._CB552725133_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img25/janART25/H1/KV_PC_Centre_Hero_1X._CB552774960_.jpg'
    ]
    const [products, setProducts] = useState([])
    const [recommendedIndex, setRecommendedIndex] = useState(0)
    const [limitedOfferIndex, setLimitedOfferIndex] = useState(0)
    const [error, setError] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextImg = () => {
        setCurrentIndex((preIndex) => (preIndex + 1) % Images.length)

    }
    const lastImg = () => {
        setCurrentIndex((preIndex) => (preIndex - 1 + Images.length) % Images.length)
    }


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
    const ITEMS_PER_BATCH = 5;
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
        <div className='home-container'>
            <div className="home-wrapper">
                <button className='bg-dark text-white py-5' onClick={nextImg}>{"<"}</button>
                <img
                    className="home-image"
                    src={Images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    style={{ width: '1280px', height: '300px' }}
                />
                <button className='bg-dark text-white py-5' onClick={lastImg}>{">"}</button>

            </div>
            <div className="products-container">
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
                                    <h3 className="product-title">{product.id}</h3>
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            className="arrow-button "
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
                                    <h3 className="product-title">{product.id}</h3>
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
        </div>
    )
}

export default Home
