import React from 'react';
import { Link } from 'react-router-dom';

class CategoryButton extends React.Component {
    handleClick(e) {
    }
    render() {

        return (
            <div>
                <Link to={this.props.url} onClick={this.handleClick}> {this.props.title} </Link>
            </div>
        );
    }
}

export default CategoryButton;