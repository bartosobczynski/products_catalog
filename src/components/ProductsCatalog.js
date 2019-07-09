import React from 'react';
import ProductsList from './ProductsList'

class ProductsCatalog extends React.Component {
  render() {
    return(
      <div className="container">
        <ProductsList/>
      </div>
    )
  }
}

export default ProductsCatalog;
