import React from 'react'
import "firebase/firestore";
import Listings from './AllListings';
import Filter from './Filter';
import '../../browsemarket.css';

class BrowseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryFilter: null };
  }

  chooseCategory(e) {
    let Category = e.target.id;
    this.setState({ categoryFilter: Category });
  }

  categoryChangeThroughFilter = (newChosenCategory) => {
    this.setState({ categoryFilter: newChosenCategory });
  }

  render() {
    return (
      <>
        {/* displays category links if no category has been chosen */}
        {!this.state.categoryFilter && <div id="categoryLink">
          <a href="" id="housing" onClick={(e) => this.chooseCategory(e)}>Housing</a>
          <a href="" id="books_and_supplies" onClick={(e) => this.chooseCategory(e)}>Books and Supplies</a>
          <a href="" id="furniture" onClick={(e) => this.chooseCategory(e)}>Furniture</a>
          <a href="" id="services" onClick={(e) => this.chooseCategory(e)}>Services</a></div>}

        {/* displays listings from relevant category when one is chosen */}
        {this.state.categoryFilter && <div id="browsingmarket">
          <h1>Marketplace</h1>
          <Filter filter={this.state.categoryFilter} categoryChangeThroughFilter={this.categoryChangeThroughFilter} />
          <Listings filter={this.state.categoryFilter} />
        </div>}
      </>
    )
  }
}

export default BrowseMarket;

