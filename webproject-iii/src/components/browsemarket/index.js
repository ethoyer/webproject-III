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
        {/* displays category buttons if no category has been chosen */}
        {!this.state.categoryFilter && <div>
          <button type="button" id="housing" onClick={(e) => this.chooseCategory(e)}>Housing</button>
          <button type="button" id="books_and_supplies" onClick={(e) => this.chooseCategory(e)}>Books and Supplies</button>
          <button type="button" id="furniture" onClick={(e) => this.chooseCategory(e)}>Furniture</button>
          <button type="button" id="services" onClick={(e) => this.chooseCategory(e)}>Services</button>
        </div>}

        {/* displays listings from relevant category when one is chosen */}
        {this.state.categoryFilter && <div id="browsingmarket">
          <h1>Marketplace</h1>
          <Filter filter={this.state.categoryFilter}  categoryChangeThroughFilter={this.categoryChangeThroughFilter}/>
          <Listings filter={this.state.categoryFilter} />
        </div>}
      </>
    )
  }
}

export default BrowseMarket;

