import React from 'react';
import LabelRadio from '../LabelRadio/LabelRadio';
import InputRadio from '../InputRadio/InputRadio';

import './ProductOptionsChooser.css';

const ProductOptionsChooser = ({ product }) => {
  const sizes = product.children.filter(p => p.size);
  const colors = product.children.filter(p => p.color);

  const hasNoColors = colors.length === 0;

  return (
    <div className="productOptionsChooser">
      <div className="optionsChooseGroup">
        <span className="chooserGroupTitle">Cor:</span>
        <ul className="chooserGroupOptionsList">
          {
            hasNoColors ?
              <li>
                <InputRadio type="radio" name="colorChooser" value={product.colorCode} color="#5A2D82" id={product.code} />
                <LabelRadio htmlFor={product.code}>{product.colorName}</LabelRadio>
              </li> :
              colors.map(c => (
                <li key={c.skuCode}>
                  <InputRadio type="radio" name="colorChooser" value={c.skuCode} color="#5A2D82" id={c.skuCode} />
                  <LabelRadio htmlFor={c.skuCode}>{c.color}</LabelRadio>
                </li>
              ))
          }
        </ul>
      </div>
      <div className="optionsChooseGroup">
        <span className="chooserGroupTitle">Tamanho:</span>
        <ul className="chooserGroupOptionsList">
          {
            sizes.map(s => (
              <li key={s.skuCode}>
                <InputRadio type="radio" name="sizeChooser" value={s.skuCode} color="#5A2D82" id={s.skuCode}/>
                <LabelRadio htmlFor={s.skuCode}>{s.size}</LabelRadio>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  ); 
};

export default ProductOptionsChooser;
