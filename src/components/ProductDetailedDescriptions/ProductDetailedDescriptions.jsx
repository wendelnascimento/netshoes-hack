import React from 'react';
import './ProductDetailedDescriptions.css';

const ProductDetailedDescriptions = ({ product }) => (
  <div className="productDetailedDescriptions">
    <span className="detailedDescriptionsTitle">Descrição:</span>
    <p className="fullDescriptionText">{product.description}</p>

    <ul className="detailedMeta">
      <li>
        <span><strong>Nome: </strong>{product.name}</span>
      </li>
      <li>
        <span><strong>Indicado para: </strong>{product.indicadoPara}</span>
      </li>
      <li>
        <span><strong>Gênero: </strong>{product.genders.join(', ')}</span>
      </li>
      <li>
        <span><strong>Origem: </strong>{product.merchandiseOrigin}</span>
      </li>
    </ul>
  </div>
);

export default ProductDetailedDescriptions;
