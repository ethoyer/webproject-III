import React from 'react'
import "firebase/firestore";
import Listings from './AllListings';
import Filter from './Filter';
import '../../browsemarket.css';
import { Link } from 'react-router-dom';

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
          <Link id="housing" onClick={(e) => this.chooseCategory(e)}>Housing</Link>
          <Link id="books_and_supplies" onClick={(e) => this.chooseCategory(e)}>Books and Supplies</Link>
          <Link id="furniture" onClick={(e) => this.chooseCategory(e)}>Furniture</Link>
          <Link id="services" onClick={(e) => this.chooseCategory(e)}>Services</Link></div>}

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

