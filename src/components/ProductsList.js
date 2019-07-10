import React from 'react';
import axios from 'axios';
import Product from './Product';
import Pagination from './Pagination'
import Spinner from './Spinner'

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productListUrl: 'https://my-json-server.typicode.com/bartosobczynski/fake_products_api/products',
    };
  }

  componentDidMount() {
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

    if (products.length === 0) {
      return(
        <Spinner />
      )
    } else {
      return(
        <div className="container">
          <Pagination products={this.filteredProducts(products)}>
            <Product />
          </Pagination>
        </div>
      )
    }
  }
}

export default ProductsList;
