import React from 'react';

class Search extends React.Component {
  state = {
    searchPhrase: ''
  };

  updateSearch(event) {
    let searchPhrase = event.target.value.substr(0, 20);
    this.setState({searchPhrase: searchPhrase});
  }

  render() {
    return(
      <div>
        <div className="md-form active-purple active-purple-2 mb-3">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={this.state.searchPhrase} onChange={this.updateSearch.bind(this)} />
          {React.cloneElement(this.props.children, {searchPhrase: this.state.searchPhrase})}
        </div>
      </div>
    )
  }
}

export default Search;
