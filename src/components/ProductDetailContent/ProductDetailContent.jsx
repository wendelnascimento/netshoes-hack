import React from 'react';
import ProductPhotosCarousel from '../ProductPhotosCarousel/ProductPhotosCarousel';
import ProductInfos from '../ProductInfos/ProductInfos';
import ProductPaymentOptions from '../ProductPaymentOptions/ProductPaymentOptions';

import './ProductDetailContent.css';

const ProductDetailContent = ({ product, similar }) => (
  <div className="productDetailContent">
    <ProductPhotosCarousel product={product} />
    <ProductInfos product={product} />
    <ProductPaymentOptions product={product} similar={similar} />
  </div>
);

export default ProductDetailContent;
