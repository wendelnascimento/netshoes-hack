import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const staticUrl = 'https://static.netshoes.com.br';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});


const ListItem = ({ product }) => (
  <div>
    <Link to={`product/${product.code}`}>
      <img
        className="listItemImage"
        srcSet={`${staticUrl}${product.images.image}?resize=326:* 1x, ${staticUrl}${product.images.image}?resize=652:* 2x`}
        src={`${staticUrl}${product.images.image}?resize=326:*`}
        alt={product.name}
      />
    </Link>
    <Link to={`product/${product.code}`} className="listItemTitle">
      <span>{product.name}</span>
    </Link>
    <div>
      <Link to={`product/${product.code}`} className="listItemPrice">
        <span>{formatter.format(product.listPrice / 100)}</span>
      </Link>
    </div>
  </div>
);

export default ListItem;