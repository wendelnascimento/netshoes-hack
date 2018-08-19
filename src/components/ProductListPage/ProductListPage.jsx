import React from 'react';
import Container from '../Container/Container';
import ListPageHeader from '../ListPageHeader/ListPageHeader';
import ListPageContent from '../ListPageContent/ListPageContent';

class ProductListPage extends React.PureComponent {
  state = {
    products: [],
  }

  async componentDidMount() {
    const req = await fetch('https://paradise.azurewebsites.net/products');
    const products = await req.json();
    this.setState({
      products,
    });
  }

  render() {
    return (
      <Container>
        <ListPageHeader />
        <ListPageContent products={this.state.products} />
      </Container>
    );
  }
}

export default ProductListPage;
