import React from 'react';
import Container from '../Container/Container';
import ProductDetailHeader from '../ProductDetailHeader/ProductDetailHeader';
import ProductDetailContent from '../ProductDetailContent/ProductDetailContent';
import ProductDetailedDescriptions from '../ProductDetailedDescriptions/ProductDetailedDescriptions';

import reccomendations from '../../reccomendations.png';

export default class ProductDetailPage extends React.PureComponent {
  state = {
    product: null,
    similar: [],
  }

  async componentDidMount() {
    const req = await fetch(`https://paradise.azurewebsites.net/products/${this.props.match.params.sku}`);
    const product = await req.json();

    const reqSimilar = await fetch(`https://paradise.azurewebsites.net/products?image=https://static.netshoes.com.br${product[0].images.image}`, { method: 'POST' });
    const similar = await reqSimilar.json();
    this.setState({
      product: product[0],
      similar,
    });

  }

  render() {
    if (!this.state.product) {
      return null;
    }

    return (
      <Container>
        <ProductDetailHeader />
        <ProductDetailContent product={this.state.product} similar={this.state.similar} />
        <img src={reccomendations} alt="reccomendations" style={{ width: '100%' }} />
        <ProductDetailedDescriptions product={this.state.product} />
      </Container>
    );
  }
}