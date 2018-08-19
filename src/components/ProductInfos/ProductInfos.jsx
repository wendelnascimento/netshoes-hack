import React from 'react';
import ProductOptionsChooser from '../ProductOptionsChooser/ProductOptionsChooser';
import './ProductInfos.css';

const ProductInfos = ({ product }) => (
  <div className="productInfos">
    <h1 className="titleProductInfo">{product.name}</h1>
    <h2 className="codeProductInfo">Ref.: {product.code}</h2>

    <span className="chooseOptionsHeader">Escolha as opções a seguir:</span>
    <ProductOptionsChooser product={product} />

    <span className="descriptionHeader">Descrição:</span>
    <p className="descriptionText">{product.description.substring(0, 100)}... <strong><a href="#">Ver mais</a></strong></p>
  </div>
);

export default ProductInfos;
