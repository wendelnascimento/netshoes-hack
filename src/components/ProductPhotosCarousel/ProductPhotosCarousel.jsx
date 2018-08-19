import React from 'react';
import './ProductPhotosCarousel.css';

const ProductPhotosCarousel = ({ product: { images = [], name } }) => (
  <div className="productPhotosCarousel">
    <ul className="sidePhotosCarousel">
      <li>
        <img src={`https://static.netshoes.com.br${images.image}`} alt={name}/>
      </li>
      <li>
        <img src={`https://static.netshoes.com.br${images.image}`} alt={name}/>
      </li>
      <li>
        <img src={`https://static.netshoes.com.br${images.image}`} alt={name}/>
      </li>
    </ul>
    <div className="mainImageCarousel">
      <img src={`https://static.netshoes.com.br${images.imageZoom}`} alt={name}/>
    </div>
  </div>
);

export default ProductPhotosCarousel;
