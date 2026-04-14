import React, { useEffect, useMemo, useState } from 'react'
import './product-image.css';


const ProductImage = ({ product }) => {
      const imgs = useMemo(
        () => (product?.images?.length ? product.images : [product?.thumbnail].filter(Boolean)),
        [product]
      );
      const [activeImg, setActiveImg] = useState(imgs[0]);

      useEffect(() => {
        setActiveImg(imgs[0]);
      }, [imgs]);

      if (!product) {
        return null;
      }

  return (
    <>
          <div className="product-gallery sticky">
            <div className="main-image-container">
              <span className="badge-custom badge-blue text-dark">
                -{Math.round(product.discountPercentage || 0)}%
              </span>
              <img src={activeImg} alt="Product" className="main-img" />
            </div>

            <div className="thumbnail-list">
              {imgs.map((img, index) => (
                <div
                  key={index}
                  className={`thumb-item ${activeImg === img ? "active" : ""}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`thumb-${index}`} />
                </div>
              ))}
            </div>
          </div>
    </>
  )
}

export default ProductImage
