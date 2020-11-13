import React from 'react';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryFilter: null };
  }

  changeCategory(e){
console.log(e.target.value);
const newChosenCategory = document.getElementById('filterCategory').value;
this.props.categoryChangeThroughFilter(newChosenCategory);
  }

  componentDidMount(){
document.getElementById('filterCategory').value = this.props.filter;
  }
  
  render(){
  return (
    <>
          <select id="filterCategory" name="filterCategory" onChange={(e) => this.changeCategory(e)}>
            <option value="housing">Housing</option>
            <option value="books_and_supplies">Books and supplies</option>
            <option value="furniture">Furniture</option>
            <option value="services">Services</option>
          </select>
    </>
  )
}}
export default Filter;