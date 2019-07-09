import React from 'react';
import Header from './components/Header';
import ProductsCatalog from './components/ProductsCatalog';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <ProductsCatalog/>
      </div>
    )
  }
}

export default App;
