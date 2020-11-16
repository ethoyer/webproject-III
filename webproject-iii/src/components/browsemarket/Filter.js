import React from 'react';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryFilter: null };
  }

  changeCategory(e) {
    const newChosenCategory = document.getElementById('filterCategory').value;
    this.props.categoryChangeThroughFilter(newChosenCategory);
  }

  componentDidMount() {
    document.getElementById('filterCategory').value = this.props.filter;
  }

  render() {
    return (
      <div id="browsemarketFilter">
        <p>Filter</p>
        <label htmlFor="filterCategory">Category:</label>
        <select id="filterCategory" name="filterCategory" onChange={(e) => this.changeCategory(e)}>
          <option value="housing">Housing</option>
          <option value="books_and_supplies">Books and supplies</option>
          <option value="furniture">Furniture</option>
          <option value="services">Services</option>
        </select>
      </div>
    )
  }
}
export default Filter;