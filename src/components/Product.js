import React from 'react';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const name = product.name;
    const description = product.description;
    const price = product.price;
    const image_url = product.image_url;

    return(
      <div className="card" style={{width: "250px", float: "left", minHeight: "200px"}}>
        <img className="card-img-top" src={ image_url } alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">{ description }</p>
          <button className="btn btn-primary">{ price } $</button>
        </div>
      </div>
    );
  }
}

export default Product;