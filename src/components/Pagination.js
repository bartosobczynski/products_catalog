import React from 'react';
import Product from './Product'

class Pagination extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startingPage: 1,
      pageSize: 4,
      currentPage: 1
    };
  }

  componentWillMount() {
    let productsCount = this.props.products.length
    let pageCount = parseInt(productsCount / this.state.pageSize);
    if (productsCount % this.state.pageSize > 0) {
      pageCount++;
    }
    this.setState({ pageCount: pageCount })
  }

  createControls() {
    let controls = [];
    const pageCount = this.state.pageCount;
    for (let i = 1; i <= pageCount; i++) {
      const baseClassName = 'pagination-controls__button';
      const activeClassName = i === this.state.currentPage ? `${baseClassName}--active` : '';
      controls.push(
        <div
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => this.setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }
    return controls;
  }

  createPaginatedData() {
    const products = this.props.products;
    const pageSize = this.state.pageSize;
    const currentPage = this.state.currentPage;
    const upperLimit = currentPage * pageSize;
    const dataSlice = products.slice((upperLimit - pageSize), upperLimit);
    return dataSlice;
  }

  setCurrentPage(num) {
    this.setState({currentPage: num});
  }

  render() {
    return (
      <div className='pagination'>
        <div className='pagination-controls'>
          {this.createControls()}
        </div>
        <div className='pagination-results'>
          {this.createPaginatedData().map(product => (
            <Product product={product} key={product.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Pagination;