// file: components/ProductCard.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

function ProductCard({ product }) {
  const imageUrl = product.images?.url || '../../assets/images/Horse Toy_30px.png';
  return (
    <div className='card-component'>
      <NavLink to={`/product/${product._id}`}> {/* Ensure product._id is used here */}
        <div className="image-wrapper">
          <img
            src={imageUrl}
            alt={product.name}
            className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <div className="card-content">
          <div className="card-info">
            <div className="badge">
              <img
                src="https://salt.tikicdn.com/ts/upload/d8/9c/08/93f926df2fd10ebe77d460ddba5f939e.png"
                width="100"
                height="20"
                alt="is_hero"
                className="styles__StyledImg-sc-p9s3t3-0 hbqSye"
              /><br />
              <img
                src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                width="89"
                height="20"
                alt="authentic_brand"
                className="styles__StyledImg-sc-p9s3t3-0 hbqSye"
              />
            </div>
            <div className="card-ingredient">
              <div className="name-wrapper">
                <h3 className="style__NameStyled-sc-15gcnmi-5 jGCIHE">{product.description}</h3>
                <ReactStars
                  classNames={'card-rating'}
                  count={product.ratings}
                  size={5}
                  onChange={(newRating) => console.log(newRating)}
                  activeColor={'#ncgerte'}
                />
              </div>
              <div className="price-discount">
                <div className="price-discount__price">{product.price}<sup>₫</sup></div>
                <div className="discount-original_price">
                  <div className="price-discount__discount">-20%</div>
                  <div className="price-discount__original-price">{String(product.price + (0.2 * product.price)).substring(0, 3)}<sup>₫</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-exorder">
          <span>Giao thứ 7, 29/06</span>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductCard;
