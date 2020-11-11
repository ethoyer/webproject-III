import React from 'react'
import "firebase/firestore";
import Listings from './AllListings';

class BrowseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryFilter: null };
  }

  chooseCategory(e) {
    let Category = e.target.id;
    this.setState({ categoryFilter: Category });
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
        {this.state.categoryFilter && <div>
          <h1>BrowseMarket</h1>
          <Listings filter={this.state.categoryFilter} />
        </div>}
      </>
    )
  }
}

export default BrowseMarket;

