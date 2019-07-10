import React from 'react';
import axios from 'axios';
import Product from './Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productListUrl: 'https://my-json-server.typicode.com/bartosobczynski/fake_products_api/products',
    };
  }

  componentWillMount() {
    axios.get(this.state.productListUrl)
      .then(res => {
        const products = res.data;
        this.setState({ products: products });
      })
  }

  filteredProducts(products) {
    let filteredProducts = this.state.products.filter((product) => product.name.toLowerCase().includes(this.props.searchPhrase.toLowerCase()));
    return filteredProducts;
  }

  render() {
    const products = this.state.products;

    return(
      <div className="container">
        {
          this.filteredProducts(products).map(product => (
            <Product product={product} key={product.id}/>
          ))
        }
      </div>
    )
  }
}

export default ProductsList;
