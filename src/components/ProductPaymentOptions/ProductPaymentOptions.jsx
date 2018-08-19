import React from 'react';
import InputRadio from '../InputRadio/InputRadio';
import LabelRadio from '../LabelRadio/LabelRadio';

import './ProductPaymentOptions.css';


const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});


const ProductPaymentOptions = ({ product, similar }) => (
  <div className="productPaymentOptions">
    <span className="titlePaymentOptions">Loja</span>
    <ul className="paymentOptionsList">
      <li>
        <InputRadio type="radio" name="paymentOptionChooser" value={product.code} color="#5A2D82" id={`${product.code}price`}/>
        <LabelRadio htmlFor={`${product.code}price`}>Loja 1</LabelRadio>
        <div>
          <span className="paymentOptionPrice">{formatter.format(product.listPrice / 100)}</span>
        </div>
        <div>
          <span className="paymentOptionParcels">até 1x de {formatter.format(product.listPrice / 100)}</span>
        </div>
      </li>
      {
        similar.map((s, i) => (
          <li key={s.code}>
            <InputRadio type="radio" name="paymentOptionChooser" value={s.code} color="#5A2D82" id={`${s.code}price`} />
            <LabelRadio htmlFor={`${s.code}price`}>Loja {i+2}</LabelRadio>
            <div>
              <span className="paymentOptionPrice">{formatter.format(s.listPrice / 100)}</span>
            </div>
            <div>
              <span className="paymentOptionParcels">até 1x de {formatter.format(s.listPrice / 100)}</span>
            </div>
          </li>
        ))
      }
    </ul>
    <div>
      <button className="buyButton">Comprar</button>
    </div>
  </div>
);

export default ProductPaymentOptions;
