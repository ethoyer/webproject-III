import React from 'react';

class CategoryButton extends React.Component {
    handleClick(e) {
    }
        render() {

        return (
            <a href={this.props.url} onClick={this.handleClick}> {this.props.title} </a>
        );
    }
}

export default CategoryButton;