import React from 'react';
import ProductsList from './ProductsList'
import Search from './Search'

class ProductsCatalog extends React.Component {
  render() {
    return(
      <div className="container">
        <Search>
          <ProductsList/>
        </Search>
      </div>
    )
  }
}

export default ProductsCatalog;
