import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "../Product/Product.scss";

const Product = ({ catigoryData, data, isError, isLoading, isSuccess, isFetching }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const itemsPerPage = 8;

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsImageLoading(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data?.products.length) % data?.products.length
    );
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data?.products?.slice(startIndex, startIndex + itemsPerPage);

  
  return (
    <div className="canteiner">
      <motion.div
        className="title_product"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>
          Don’t miss out <br /> new drops
        </h3>
        <button>Shop New Drops</button>
      </motion.div>

      <div className="container">
        <div className="product_carts">
          {isSuccess &&
            currentItems.map((product, index) => (
              <motion.div
                className="cart"
                key={product?.id}
                
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="cart_img" onClick={() => openModal(startIndex + index)}>
                  <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    loading="lazy"
                    style={{
                      filter: "blur(15px)",
                      transition: "filter 0.3s ease-in-out",
                    }}
                    onLoad={(e) => (e.target.style.filter = "none")}
                  />
                </div>
                <h3 title={product?.title}>{product?.title}</h3>
                <button>
                  View Product - <mark id="product_price"> ${product?.price}</mark>
                </button>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="pagination">
        <motion.button
          onClick={handlePrev}
          disabled={currentPage === 1}
          whileHover={{ scale: 1.1 }}
        >
          Previous
        </motion.button>
        <motion.button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= data?.products?.length}
          whileHover={{ scale: 1.1 }}
        >
          Next
        </motion.button>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="overlay" onClick={closeModal}></div>
          <motion.div
            className="slider"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button className="prev" onClick={prevSlide} whileHover={{ scale: 1.1 }}>
              &#8592;
            </motion.button>

            <div className="modal-img-wrapper">
              {isImageLoading && <div className="loading">Loading...</div>}
              <img
                src={data?.products[currentIndex]?.thumbnail}
                alt="Product"
                onLoad={handleImageLoad}
                style={{
                  filter: isImageLoading ? "blur(25px)" : "none",
                }}
              />
            </div>

            <motion.button className="next" onClick={nextSlide} whileHover={{ scale: 1.1 }}>
              &#8594;
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Product;
